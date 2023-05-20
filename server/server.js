import { get_data, get_data_by_id } from "./sql.js";
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
const connection = mysql.createConnection(
  'mysql://eqf739pfps9gzm03h526:pscale_pw_CHzc7Gr8K1iQoobAZAhj2lT5trcse5lW20LMuO8sZqe@ap-south.connect.psdb.cloud/test?ssl={"rejectUnauthorized":true}'
);
app.get("/data/:id", (req, res) => {
  const idt = req.params.id;
  console.log(idt);
  connection.query(get_data_by_id, [idt], (error, results) => {
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
  baseURL: "http://localhost:" + port,
  clientID: "YdofSxD4zvXbYaqrBSQlogFIqqknIowQ",
  issuerBaseURL: "https://dev-8fefl2rjoosr4lj1.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/sup", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, () => {
  console.log("Server listening on port " + port + "...");
});
