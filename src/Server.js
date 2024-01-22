const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3001', 'https://rickandmorty-agusfleitas.up.railway.app/']; // Lista de URLs permitidas
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Credentials', "true");
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }
    next();
  });

server.use(router);

module.exports = server;