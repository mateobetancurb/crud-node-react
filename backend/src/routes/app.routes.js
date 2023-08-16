const { Router } = require("express");
const router = Router();

const { getQuotes, createQuote } = require("../controllers/appController");

router.get("/get-quotes", getQuotes);
router.post("/create-quote", createQuote);

module.exports = router;
