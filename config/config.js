const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	DB:
		"mongodb+srv://" +
		process.env.DB_USER +
		":" +
		process.env.DB_PASS +
		"@" +
		process.env.DB,

	SMTP_PORT: process.env.SMTP_PORT,
	SMTP_HOST: process.env.SMTP_HOST,
	SMTP_USER: process.env.SMTP_USER,
	SMTP_PASS: process.env.SMTP_PASS,
};
