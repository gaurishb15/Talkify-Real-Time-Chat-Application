import express from "express";
import { getAllUsers, getLoggedInUser, getOtherUsers, login, logout, register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthenticated,getOtherUsers);
router.route("/allUsers").get(isAuthenticated,getAllUsers);
router.route("/me").get(isAuthenticated,getLoggedInUser);

export default router;