const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

router.get("/test", userController.testApi);

module.exports = router;
