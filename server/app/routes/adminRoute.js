import express from "express";
import { addAdminPostDetails,getUnverifiedUsers } from "../controllers/admin-controller.js";
import {userAuthorization} from "../middlewares/auth.js";
const router = express.Router();

router.post("/addAdminPostDetails"  , addAdminPostDetails);
router.get("/getUnverifiedUsers" , getUnverifiedUsers);
// router.get("/getAdminPostDetails", getAdminPostDetails);

export default router;