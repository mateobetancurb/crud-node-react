const { Router } = require("express");
const router = Router();

const { getTasks } = require("../controllers/appController");

router.get("/", getTasks);

module.exports = router;
