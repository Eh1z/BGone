import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home, Results, GetCredits } from "./pages";
import { Navbar, Footer } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<div className="min-h-screen bg-slate-50">
			<ToastContainer position="bottom-right" />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/results" element={<Results />} />
				<Route path="/get-credits" element={<GetCredits />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
