const express = require("express")
const { static } = require("express");

const app = express()

app.use(express.static(__dirname + "/public"))

app.listen(5000)

app.get("/", (req, res)=>{
})