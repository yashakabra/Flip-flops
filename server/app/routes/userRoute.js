// const express = require("express");
// const { addUserPostDetails } = require("../controllers/user-controller.js");
import {userAuthorization} from "../middlewares/auth.js";
import express from "express";
import { addUserPostDetails, getValidUsers,getSinglePostDetails } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/addUserPostDetails",userAuthorization , addUserPostDetails);
router.get("/getValidUsers",userAuthorization , getValidUsers);
router.get(
  "/getSinglePostDetails",
  userAuthorization,
  getSinglePostDetails
);
export default router;