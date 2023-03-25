import admin from "../config/firebase-config.js";
import dotenv from "dotenv";

dotenv.config({});

export const userAuthorization = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7);
    try {
      await admin.auth().verifyIdToken(token);
      return next();
    } catch (error) {
      console.log(error.message);
      res.status(401).send({ message: "Wrong User" });
    }
  } else {
    res.status(401).send({ message: "Please Log in first" });
  }
};

export const govtAdminAuthorization = async(req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === `${process.env.GOVT_ADMIN_EMAIL_ID}#${process.env.GOVT_ADMIN_PASSWORD}`) {
    return next();
  } else {
    res.status(401).send({ message: "Please Log in first" });
  }
}

export const pvtAdminAuthorization = async(req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader, process.env.PVT_ADMIN_EMAIL_ID, process.env.PVT_ADMIN_PASSWORD);
  if (authHeader === `${process.env.PVT_ADMIN_EMAIL_ID}#${process.env.PVT_ADMIN_PASSWORD}`) {
    return next();
  } else {
    res.status(401).send({ message: "Please Log in first" });
  }
}

export const commonAdminAuthorization = async(req, res, next) => {
  const authHeader = req.headers.authorization;
  next();
}