import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user registration
export const register = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "Please fill in all required fields." });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match. Please try again." });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "Username already exists. Please choose another one." });
        }
        //hashing the password to protect from hacking
        const hashedPassword = await bcrypt.hash(password, 10);

        // profilePhoto
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        await User.create({
            fullName,
            username,
            password: hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        });
        return res.status(201).json({
            message: "Account created successfully! Welcome aboard!",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Please fill in all required fields." });
        };
        const user = await User.findOne({ username });
        if (!user) {//user does not found
            return res.status(400).json({
                message: "User does not exist.",
                success: false
            })
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect username or password.",
                success: false
            })
        };

        //token - when we will message, we have to make sure the user is logged in
        const tokenData = {
            userId: user._id
        };

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
        
        //store token in cookie and protect it
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            _id: user._id,
            username: user.username,
            fullName: user.fullName,
            profilePhoto: user.profilePhoto
        });

    } catch (error) {
        console.log(error);
    }
}
export const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "You have been successfully logged out."
        })
    } catch (error) {
        console.log(error);
    }
}
export const getOtherUsers = async (req, res) => {
    try {
        const loggedInUserId = req.id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        //above line will give all users other than the loggedinuser
        return res.status(200).json(otherUsers);
    } catch (error) {
        console.log(error);
    }
}
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password"); // Fetch all users and exclude the password
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred while fetching users." });
    }
}

export const getLoggedInUser = async (req, res) => {
    try {
        const loggedInUserId = req.id; // Assume req.id is the ID of the logged-in user
        const user = await User.findById(loggedInUserId).select("-password"); // Fetch the logged-in user and exclude the password
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}
