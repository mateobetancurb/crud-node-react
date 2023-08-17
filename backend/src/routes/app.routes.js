const { Router } = require("express");
const router = Router();

const {
	getQuotes,
	createQuote,
	deleteQuote,
} = require("../controllers/appController");

router.get("/get-quotes", getQuotes);
router.post("/create-quote", createQuote);
router.delete("/delete-quote/:id", deleteQuote);

module.exports = router;
