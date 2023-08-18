const { Router } = require("express");
const router = Router();

const {
	getQuotes,
	createQuote,
	editQuote,
	deleteQuote,
} = require("../controllers/appController");

router.get("/get-quotes", getQuotes);
router.post("/create-quote", createQuote);
router.put("/update-quote/:id", editQuote);
router.delete("/delete-quote/:id", deleteQuote);

module.exports = router;
