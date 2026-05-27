require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

console.log("Starting Mongo connection...");

mongoose.connect(process.env.atlas_URL)
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("Mongo Error:", err.message);
});

app.listen(4000, () => {
    console.log("app is live");
});