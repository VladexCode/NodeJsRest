require("dotenv").config();
const Server = require("./Models/Server");


const Serve = new Server();

Serve.listen();