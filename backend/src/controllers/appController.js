const db = require("../../config/db");

const getTasks = async (req, res) => {
	try {
		const connection = await db();
		const [tasks, _] = await connection.query("SELECT * FROM tasks");
		connection.end();
		res.json(tasks);
		console.log(tasks);
	} catch (error) {
		console.error("Error getting tasks:", error);
		res.status(500).json({ error: "Something went wrong" });
	}
};

module.exports = {
	getTasks,
};
