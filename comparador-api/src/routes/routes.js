const { Router } = require("express");
const UsersRouter = require("./UsersRouter");
const SearchRouter = require("./SearchRouter");
const router = Router();

router.use("/user", UsersRouter);
router.use("/search", SearchRouter);

module.exports = router;
