import React from "react";
import { assets } from "../assets/";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
	const { openSignIn } = useClerk();
	const { isSignedIn, user } = useUser();
	return (
		<nav className="w-full ~py-3/8 ~px-3/32 flex justify-between items-center ">
			<a href="/">
				<img src={assets.logo} alt="logo" className="~w-32/52" />
			</a>
			{isSignedIn ? (
				<div className="drop-shadow-3xl">
					<UserButton />
				</div>
			) : (
				<button onClick={() => openSignIn({})} className="primaryBtn">
					Get Started
				</button>
			)}
		</nav>
	);
};

export default Navbar;
