import { useAuth } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();
const AppContextProvider = (props) => {
	const [credits, setCredits] = useState(false);
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	const { getToken } = useAuth();

	const loadCredits = async () => {
		try {
			const token = await getToken();
			const { data } = await axios.get(backendUrl + "/api/user/credits", {
				headers: { token },
			});

			if (data.success) {
				setCredits(data.credits);
			}
		} catch (error) {
			console.error(error);
			toast.error(error.message);
		}
	};

	const value = {
		credits,
		setCredits,
		loadCredits,
		backendUrl,
	};

	return (
		<AppContextProvider value={value}>{props.children}</AppContextProvider>
	);
};

export default AppContextProvider;
