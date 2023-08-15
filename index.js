const express = require('express');
const app = express();
const morgan = require('morgan');

const { fromPath, info } = require('pdf-poppler');

const Database=require("./config/database")
const authrouter=require("./routes/authentificationroute")
const projectroute = require("./routes/project")
const reserveroute = require("./routes/reserve")
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

Database()

app.use(bodyParser());
app.use(express.json());
app.use('/uploads', express.static('uploads'))
app.use("/auth", authrouter)
app.use("/project", projectroute)
app.use("/reserve", reserveroute)


const port = 3000;
app.listen(port, "0.0.0.0" ,() => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});

