// const express = require("express");
// const cors = require("cors");
// require('dotenv').config({path:'./.env'});

// const app = express();
// const PORT = process.env.PORT || 8000;
// const URL = process.env.URL || "http://localhost:3002";

// const corsOption = {
//     origin:URL,
//     methods:['GET', 'POST', 'PUT', "DELETE"],
//     allowedHeaders:['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOption));
// app.use(express.json());



// app.listen(PORT, ()=>{
//     console.log(`Server Started at ${PORT}!`);
// });
// const express = require("express");
// const cors = require("cors");
// const adminRoute = require("./app/routes/adminRoute");
// const userRoute = require("./app/routes/userRoute");
// require("dotenv").config({ path: "./.env" });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import adminRoute from "./app/routes/adminRoute.js";
import userRoute from "./app/routes/userRoute.js";

dotenv.config({path:"./.env"});

const app = express();

const PORT = process.env.PORT || 8000;
const URL = process.env.URL || "http://localhost:8000";

const corsOption = {
  origin: URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/admin", adminRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}!`);
});