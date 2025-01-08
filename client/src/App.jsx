import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home, Results, GetCredits } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
	return (
		<div className="min-h-screen bg-slate-50">
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
