import { Webhook } from "svix";
import { User } from "../models/userModel.js";
// API Controller to manage clerk user with database
// http://localhost:8000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
	try {
		// Create svix instance with clerk webhook secret
		const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
		await whook.verify(JSON.stringify(req.body), {
			"svix-id": req.headers["svix-id"],
			"svix-timestamp": req.headers["svix-timestamp"],
			"svix-signature": req.headers["svix-signature"],
		});

		const { data, type } = req.body;

		switch (type) {
			// Create New User
			case "user.created": {
				const userUser = new User({
					clerkId: data.id,
					email: data.email_addresses[0].email_address,
					firstName: data.first_name,
					lastName: data.last_name,
					balance: data.balance,
					userImg: data.image_url,
				});
				await newUser.save();
				res.json({});
				break;
			}
			// Update User Details
			case "user.updated": {
				const updatedUser = {
					clerkId: data.id,
					email: data.email_addresses[0].email_address,
					firstName: data.first_name,
					lastName: data.last_name,
					balance: data.balance,
					userImg: data.image_url,
				};
				await User.findOneAndUpdate({ clerkId: data.id }, updatedUser);
				res.json({});
				break;
			}
			case "user.deleted": {
				await User.findOneAndDelete({ clerkId: data.id });
				res.json({});
				break;
			}
			default:
				break;
		}
	} catch (error) {
		console.error(error.message);
		res.json({ success: false, message: error.message });
	}
};

export { clerkWebhooks };
