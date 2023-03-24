const express = require("express");
const cors = require("cors");
require('dotenv').config({path:'./.env'});

const app = express();
const PORT = process.env.PORT || 8000;
const URL = process.env.URL || "http://localhost:3002";

const corsOption = {
    origin:URL,
    methods:['GET', 'POST', 'PUT', "DELETE"],
    allowedHeaders:['Content-Type', 'Authorization'],
};

app.use(cors(corsOption));
app.use(express.json());



app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}!`);
});