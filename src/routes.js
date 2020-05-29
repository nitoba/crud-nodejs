const express = require("express");
const userController = require("./controllers/UserController");

const routes = express.Router();


routes.post("/users", userController.createUser);
routes.get("/users", userController.index);
routes.get("/user", userController.show);
routes.delete("/user/:id", userController.delete);
routes.put("/user/:id", userController.update);


module.exports = routes;