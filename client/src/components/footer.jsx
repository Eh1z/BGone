import React from "react";
import { assets } from "../assets/";
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="w-full ~py-8/32 ~px-1/16 flex justify-between items-center gap-8">
			{/* Logo Area */}
			<div className="flex gap-3 items-center justify-start">
				<img src={assets.logo} alt="logo" className="~w-32/52" />
				<span className="text-3xl text-gray-300">|</span>
				<span className="text-gray-500 ~text-xs/lg">
					All rigts reserved. <br />
					©BgFree
				</span>
			</div>

			{/* Social Buttons */}
			<div className="flex items-center justify-end gap-5">
				{/* LinkedIn */}
				<a
					href="https://linkedin.com/in/godsentehiz/"
					target="_blank"
					className="~w-8/12 ~h-8/12 rounded-full shadow-md shadow-slate-300 flex items-center justify-center hover:bg-[--accent] hover:text-white transition duration-500 "
				>
					<FaLinkedinIn />
				</a>

				{/* XTwitter */}
				<a
					href="https://x.com/GodsentEhiz"
					target="_blank"
					className="~w-8/12 ~h-8/12 rounded-full shadow-md shadow-slate-300 flex items-center justify-center hover:bg-[--accent] hover:text-white transition duration-500 "
				>
					<FaXTwitter />
				</a>

				{/* Github */}
				<a
					href="https://github.com/Eh1z"
					target="_blank"
					className="~w-8/12 ~h-8/12 rounded-full shadow-md shadow-slate-300 flex items-center justify-center hover:bg-[--accent] hover:text-white transition duration-500 "
				>
					<FaGithub />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
