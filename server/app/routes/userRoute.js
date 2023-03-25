// const express = require("express");
// const { addUserPostDetails } = require("../controllers/user-controller.js");

import express from "express";
import { addUserPostDetails, getValidUsers } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/addUserPostDetails", addUserPostDetails);
router.get("/getValidUsers", getValidUsers);
export default router;