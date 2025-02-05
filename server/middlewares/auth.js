import jwt from "jsonwebtoken";

// Middleware to decode jwt token for your clerkId
export const authUser = async (req, res, next) => {
	try {
		const { token } = req.headers;
		if (!token) {
			res.json({
				success: false,
				message: "Not Authorised, Login Again",
			});
		}

		const token_decode = jwt.decode(token);
		req.body.clerkId = token_decode.clerkId;
		next();
	} catch (error) {
		console.error(error.message);
		res.json({ success: false, message: error.message });
	}
};
