const { Router } = require("express");
const UsersRouter = require("./UsersRouter");
const router = Router();

router.use("/user", UsersRouter);

module.exports = router;
