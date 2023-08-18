const db = require("../../config/db");

const getQuotes = async (req, res) => {
	try {
		const connection = await db();
		const [quotes, _] = await connection.query("SELECT * FROM quotes");
		res.json(quotes);
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
		res.json({ status: 200, message: "Quote created successfully" });
	} catch (error) {
		console.error("Error creating quote:", error);
		res.status(500).json({ error: "Something went wrong" });
	}
};

const editQuote = async (req, res) => {
	const { author, category, quoteBook } = req.body;
	const { id } = req.params;
	try {
		const connection = await db();
		await connection.query("UPDATE quotes SET ? WHERE id = ?", [
			{ author, category, quoteBook },
			id,
		]);
		res.json({ status: 200, message: `The quote with id: ${id} was updated` });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Something went wrong" });
	}
};

const deleteQuote = async (req, res) => {
	const { id } = req.params;
	try {
		const connection = await db();
		await connection.query("DELETE FROM quotes WHERE id = ?", [id]);
		res.json({ status: 200, message: `The quote with id: ${id} was deleted` });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Something went wrong" });
	}
};

module.exports = {
	getQuotes,
	createQuote,
	editQuote,
	deleteQuote,
};
