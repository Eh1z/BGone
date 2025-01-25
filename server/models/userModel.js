import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		clerkId: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		userImg: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		balance: {
			type: Number,
			default: 5,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
