import React, { useContext, useEffect } from "react";
import { assets } from "../assets/";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
	const { openSignIn } = useClerk();
	const { isSignedIn, user } = useUser();
	const { credits, loadCredits } = useContext(AppContext);

	useEffect(() => {
		if (isSignedIn) {
			loadCredits();
		}
	}, [isSignedIn]);

	return (
		<nav className="w-full ~py-3/8 ~px-3/32 flex justify-between items-center ">
			<a href="/">
				<img src={assets.logo} alt="logo" className="~w-32/52" />
			</a>
			{isSignedIn ? (
				<div className="drop-shadow-3xl flex items-center gap-8">
					<button className="flex justify-center items-center gap-3 py-2 px-5 bg-[--secondary] rounded-2xl">
						<img src={assets.credit_icon} alt="" className="w-6" />
						<span className="font-bold">{credits}</span>
					</button>
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
