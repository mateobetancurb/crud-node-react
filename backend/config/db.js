const { createPool } = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

async function connectToDatabase() {
	const connection = await createPool({
		database: process.env.DATABASE_NAME,
		user: process.env.DATABASE_USERNAME,
		host: process.env.DATABASE_HOST,
		password: process.env.DATABASE_PASSWORD,
		ssl: {
			rejectUnauthorized: false,
		},
	});

	console.log("connection ok!");
	return connection;
}

module.exports = connectToDatabase;
