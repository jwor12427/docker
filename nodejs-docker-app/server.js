/** @format */

const express = require("express");

const PORT = 8080;

//APP
const app = express();
app.get("/", (req, res) => {
	res.send("바뀌나?");
});

app.listen(PORT);
console.log("Server is Runing");
