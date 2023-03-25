// const express = require("express");
// const { addUserPostDetails } = require("../controllers/user-controller.js");
import {userAuthorization} from "../middlewares/auth.js";
import express from "express";
import { addUserPostDetails, getValidUsers } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/addUserPostDetails",userAuthorization , addUserPostDetails);
router.get("/getValidUsers",userAuthorization , getValidUsers);
export default router;