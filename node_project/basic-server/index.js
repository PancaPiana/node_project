const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Benvenuto Nel Server Express Di Compito");
});

app.get("/:name", (req, res) => {
    res.send(req.params.name);
});

app.listen(8000, () => {
    console.log("server is listening on port 8000");
});