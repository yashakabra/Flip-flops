// const admin = require("../config/firebase-config");
import admin from "../config/firebase-config.js";

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

// export default userAuthorization;