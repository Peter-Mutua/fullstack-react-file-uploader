const express = require("express");

const fileupload = require("express-fileupload");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser());

app.use(fileupload());

app.use(express.static("files"));

app.post("/upload/", (req, res) => {
    const newPath = __dirname + "./bckend/files/";
    const file = req.files.file;
    const fileName = file.name;
    file.mv(`${newPath}${fileName}`, (err) => {
        if (err) {
            res.status(500).send({ message: "File upload failed!", code: 500 });
        } else {
            res.status(200).send({ message: "File uploaded successfully!", code: 200});
        }
    });
});

app.listen(5000, (err) => {
    if (err) {
        console.log(err + " Connetion Failed!");
    } else {
        console.log("\t\t*********Server ready to process requests!*********");
    }
});