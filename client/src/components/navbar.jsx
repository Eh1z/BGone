import React from "react";
import { assets } from "../assets/";

const Navbar = () => {
	return (
		<nav className="w-full py-3 ~px-5/32 flex justify-between items-center ">
			<img src={assets.logo} alt="logo" className="~w-32/52" />
			<button className="primaryBtn">Get Started</button>
		</nav>
	);
};

export default Navbar;
