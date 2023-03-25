// const {Web3Storage}=require('web3.storage');
// // const dotenv=require('dotenv');
// const {getFilesFromPath} = require("web3.storage");
// const {File}=require('web3.storage');
// const fetch = require("node-fetch");
// require('dotenv').config();


import { Web3Storage } from "web3.storage";
import dotenv from "dotenv";
import { getFilesFromPath } from "web3.storage";
import { File } from "web3.storage";
import fetch from "node-fetch";
import { updateUsersForValidity } from "../service/updateUsersForValidity.js";
dotenv.config();


function makeStorageClient() {
  return new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN });
}

function makeFileObjects(obj) {
  const buffer = Buffer.from(JSON.stringify(obj));
  const files = [new File([buffer], "hello.json")];
  return files;
}

async function storeWithProgress(obj) {
  const client = makeStorageClient();
  const files = makeFileObjects(obj);
  return client.put(files);
}

async function listUploads() {
  const client = makeStorageClient();
  let users = [];
  for await (const upload of client.list()) {
    const url = `https://${upload.cid}.ipfs.w3s.link/hello.json`;
    
    // console.log(url);
    
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        users.push(data);
      })
      .catch((error) => {
        console.log(error.message);
        console.error(`Error fetching data from ${url}: ${error}`);
      });
  }

//   console.log(users);
  return {users:users};

//   return users;
}

export const addUserPostDetails = async (request, response) => {
  const obj = request.body;
  console.log(obj);
  const resp=await storeWithProgress(obj);
  try {
    response.status(200).json("your data saved");
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
};

export const getValidUsers = async (request, response) => {
  console.log("KLKLK");
  const res=await listUploads();
    
  const res2=await updateUsersForValidity(res);
  console.log(res2);
  try {
    response.status(200).json(res2.users);
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
};

// module.exports = {addUserPostDetails};