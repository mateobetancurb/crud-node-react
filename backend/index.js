const express = require("express");
const db = require("./config/db.js");
const appRoutes = require("./src/routes/app.routes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", appRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server runing in port ${port}`);
});
