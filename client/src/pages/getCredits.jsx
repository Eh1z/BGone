import React from "react";
import { plans, assets } from "../assets";

const GetCredits = () => {
	return (
		<div className="min-h-[80vh] text-center pt-14 mb-10 flex flex-col gap-5 justify-start items-center px-32">
			<button className="text-xl font-medium border border-[--secondary] rounded-2xl py-2 px-8">
				Our Plans
			</button>
			<span className="text-gradient2 text-4xl font-bold">
				Choose the plan that's right for you
			</span>
			{/* Plans */}
			<div className="flex text-left justify-center gap-8 w-full pt-8">
				{plans.map((item, index) => (
					<div
						className="bg-white p-8 rounded-xl drop-shadow-md  w-full max-w-[450px] border hover:scale-105 transition-all duration-500"
						key={index}
					>
						<img src={assets.logo_icon} alt="logo" width={40} />
						<p className="mt-3 font-bold text-xl">{item.id}</p>
						<p className="text-sm">{item.desc}</p>
						<p className="mt-8">
							<span className="text-3xl font-semibold">
								${item.price}
							</span>
							/ {item.credits} credits
						</p>
						<button className="w-full primaryBtn mt-8 min-w-52 text-sm ">
							Get
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default GetCredits;
