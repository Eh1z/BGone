import React from "react";
import { assets } from "../assets/";

const Navbar = () => {
	return (
		<nav className="w-full py-3 ~px-5/32 flex justify-between items-center ">
			<img src={assets.logo} alt="logo" />
			<button className="primaryBtn">Get Started</button>
		</nav>
	);
};

export default Navbar;
