const db = require("../../config/db");

const getQuotes = async (req, res) => {
	try {
		const connection = await db();
		const [quotes, _] = await connection.query("SELECT * FROM quotes");
		res.json(quotes);
		connection.end();
	} catch (error) {
		console.error("Error getting quotes:", error);
		res.status(500).json({ error: "Something went wrong" });
	}
};

const createQuote = async (req, res) => {
	const { id, author, category, quoteBook } = req.body;
	try {
		const connection = await db();
		await connection.query(
			"INSERT INTO quotes (id, author, category, quoteBook) VALUES (?, ?, ?, ?)",
			[id, author, category, quoteBook]
		);
		connection.end();
		res.json({ status: 200, message: "Quote created successfully" });
	} catch (error) {
		console.error("Error creating quote:", error);
		res.status(500).json({ error: "Something went wrong" });
	}
};

module.exports = {
	getQuotes,
	createQuote,
};
