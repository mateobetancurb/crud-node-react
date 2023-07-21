const { Router } = require("express");
const router = Router();

const { home } = require("../controllers/appController");

router.get("/", home);

module.exports = router;
