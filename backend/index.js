const express = require("express");
const cors = require("cors");
const appRoutes = require("./src/routes/app.routes.js");
const connectToDatabase = require("./config/db.js");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
	try {
		const connection = await connectToDatabase();

		app.use("/", appRoutes);

		const port = process.env.PORT || 3000;
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	} catch (error) {
		console.error("Error connecting to the database:", error);
	}
}

startServer();
