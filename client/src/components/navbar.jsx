import React from "react";
import { assets } from "../assets/";

const Navbar = () => {
	return (
		<div className="w-full py-3 ~px-5/32 flex justify-between items-center ">
			<img src={assets.logo} alt="logo" />
			<button className="primarybtn">Get Started</button>
		</div>
	);
};

export default Navbar;
