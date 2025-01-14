const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        if (err) return res.status(500).send("Error reading files directory.");
        res.render("index", { files: files });
    });
});

app.get("/edit/:filename", (req, res) => {
    res.render("edit", { filename: req.params.filename });
});

app.post("/edit", (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, (err) => {
        if (err) {
            return console.error("Error renaming file:", err);
        }
        res.redirect('/');
    });
});
app.get("/file/:filename", (req, res) => {
    const filePath = `./files/${req.params.filename}`;
    fs.readFile(filePath, "utf-8", (err, filedata) => {
        if (err) return res.status(404).send("File not found.");
        res.render("show", { filename: req.params.filename, filedata: filedata });
    });
});

app.post("/create", (req, res) => {
    const fileName = req.body.title.split(" ").join("") + ".txt";
    fs.writeFile(`./files/${fileName}`, req.body.details, (err) => {
        if (err) return res.status(500).send("Error saving file.");
        res.redirect("/");
    });
});



app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});



