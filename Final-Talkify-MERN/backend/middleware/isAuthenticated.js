import jwt from "jsonwebtoken";
const isAuthenticated = async(req,res,next) => {//this will decode the userId from token and then use it.
  try {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"User not authenticated or logged in."})
    };
    const decode = await jwt.verify(token,process.env.JWT_SECRET_KEY);
    if(!decode){
        return res.status(401).json({message:"Invalid token"});
    };
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticated;

const req = {
    id:"",
}
req.id = "sdlbgnjdfn"