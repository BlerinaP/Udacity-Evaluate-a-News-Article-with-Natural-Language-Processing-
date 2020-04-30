/**
 *
 * Requiring packages we install
 */

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AYLIEN = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();
/**
 *
 * Creating the instance of express and using the pacages we installed
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

/**
 *
 * Importing and initatin SDK with the api key and api id
 */
const textapi = new AYLIEN({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

/**
 * Making a get request to the root and sending back index.html file
 */
app.get("/", function (req, res) {
    res.sendFile("index.html")
});

/**
 * Making a POST request to /text endpoint
 */
app.post("/text", (req, res) => {
    const { text } = req.body;
    console.log("Request to '/text' endpoint", text);
    textapi.sentiment({ text }, (error, result, remaining) => {
        console.log("Aylien Callback", result, remaining);
        res.send(result);
    });
});
/**
 * Making a POST request to /url endpoint
 */
app.post("/url", (req, res) => {
    const { text } = req.body;
    console.log("Request to '/url' endpoint", text);
    textapi.sentiment({ url: text }, (error, result, remaining) => {
        console.log("Aylien Callback", result, remaining);
        res.send(result);
    });
});

app.post("/hashtag", (req, res) => {
    const { text } = req.body;
    console.log("Request to '/hashtag' endpoint", text);
    textapi.hashtags({ text }, (error, result, remaining) => {
        console.log("Aylien Callback", result, remaining);
        res.send(result);
    });
});

/**
 * Defining the port of the server
 */
// designates what port the app will listen to for incoming requests
module.exports = app;
