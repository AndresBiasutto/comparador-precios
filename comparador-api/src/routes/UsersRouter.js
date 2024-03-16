const { Router } = require("express");
const UsersRouter = Router();
const {
  getUserHandler,
  postUserHandler,
  searchProductHandler
  } = require("../handlers/UsersHandlers");

UsersRouter.get("/", getUserHandler);
UsersRouter.post("/", postUserHandler);
UsersRouter.get("/:search", searchProductHandler);


module.exports = UsersRouter;