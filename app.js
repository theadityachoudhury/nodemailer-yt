const express = require("express");
const { connect } = require("mongoose");
const { success, error } = require("consola");
const { DB } = require("./config/config");

const auth = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", auth);

app.get("/", (req, res) => {
	res.send("server is up 2.0");
});

// app.listen(5000);
// console.log("Server is running at port 5000");

const startApp = async () => {
	try {
		await connect(DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 5000,
			dbName: "nodemailer",
		});

		success({
			message: `Successfully connected with database\n${DB}`,
			badge: true,
		});

		app.listen(5000, async () => {
			success({
				message: `Server started on PORT 5000`,
				badge: true,
			});
		});
    } catch(err) {
        
        error({
            message: `Unable to connect with database\n ${err}`,
            badge: true,
        });
        startApp();
    }
};

startApp();
