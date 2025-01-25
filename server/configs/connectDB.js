import mongoose from "mongoose";

const connectDB = async () => {
	const connection = {};

	try {
		if (connection.isConnected) return;

		const db = await mongoose.connect(process.env.MONGO);
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

export default connectDB;
