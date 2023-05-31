import { get_all, get_by_id } from "./sql.js";
import os from "os";
import cors from "cors";
// const express = require("express");
import express from "express";
import mysql from "mysql2";
import { auth } from "express-openid-connect";
// import { requiresAuth } from "express-openid-connect";
import pkg from "express-openid-connect";

const { requiresAuth } = pkg;
const port = 3000;

// const { requiresAuth } = require("express-openid-connect");
// const mysql = require("mysql2");
const app = express();
app.use(cors()); // using cores to allow cross origin requests (to allow the react app to access the server thats running on a different port)
const connection = mysql.createConnection(process.env["DATABASE_URL"]);

app.get("/data/:id", (req, res) => {
  const idt = req.params.id;
  console.log(idt);
  connection.query(get_by_id, [idt], (error, results) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }
    res.json(results);
  });
});

app.get("/data", (req, res) => {
  connection.query(get_all, (error, results) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }
    res.json(results);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!"); // This will send the text "Hello World!" to the client
});

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://10.0.0.149:3000",
  clientID: process.env["AUTH0_CLIENT_ID"],
  issuerBaseURL: process.env["AUTH0_ISSUER_BASE_URL"],
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/isauth", (req, res) => {
  console.log(req);
  res.send(req.oidc.isAuthenticated() ? "Log out" : "Log in");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, "0.0.0.0", () => {
  console.log("Server listening on port " + port + "...");

  const networkInterfaces = os.networkInterfaces();
  const addresses = networkInterfaces["en0"][1]; // Adjust the network interface name if necessary

  console.log(`Server listening on http://${addresses.address}:${port}/`);
});
