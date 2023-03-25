import express from "express";
import {
  getUnverifiedUsers,
  getUnverifiedUsersGovt,
  getSinglePostDetailsAdmin,
  addUserPostDetailsAdmin,
} from "../controllers/admin-controller.js";
import {commonAdminAuthorization, govtAdminAuthorization, pvtAdminAuthorization, userAuthorization} from "../middlewares/auth.js";
const router = express.Router();

router.post("/addUserPostDetailsAdmin",addUserPostDetailsAdmin);
router.get("/getUnverifiedUsers" , pvtAdminAuthorization,getUnverifiedUsers);
router.get("/getUnverifiedUsersGovt", govtAdminAuthorization,getUnverifiedUsersGovt);
router.get("/getSinglePostDetailsAdmin",getSinglePostDetailsAdmin);
export default router;
