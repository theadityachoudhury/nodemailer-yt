const { mailer } = require("./mailer-controller");

const register = async (req, res, next) => {
	const { email, name, password } = req.body;
	await mailer(
		email,
		"Account Creation at NodeMailer",
		`Your account has been created <br> email: ${email} <br> password: ${password} <br> name: ${name}`,
		email,
		"user_creation"
	);

	return res.status(200).json("ok");
};

module.exports = {
	register,
};
