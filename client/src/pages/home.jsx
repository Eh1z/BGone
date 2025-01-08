import React from "react";
import { UploadIcon } from "@radix-ui/react-icons";
import { assets } from "../assets";

const Home = () => {
	return (
		<div className="w-full flex flex-col items-center justify-start ~py-5/8 ~px-5/32">
			{/* Hero Section */}
			<div className="w-full grid grid-cols-1-reverse lg:grid-cols-6">
				{/* Hero Text */}
				<div className="flex flex-col gap-8 items-start justify-center col-span-3">
					<span className="~text-3xl/6xl font-bold ">
						Remove Image <br />
						<span className="bg-gradient-to-r from-[--accent] via-[--blue] to-[--lilac] text-transparent bg-clip-text">
							backgrounds
						</span>{" "}
						Instantly <br />
						online for free.
					</span>
					<p className="~text-sm/xl max-w-[600px]">
						Upload your image and remove the background
						instantly—for free! No design skills, no software, no
						hassle.
					</p>
					<div>
						<input type="file" name="" id="upload1" hidden />
						<label htmlFor="upload1" className="uploadBtn">
							<UploadIcon /> <span>Upload Image</span>
						</label>
					</div>
				</div>

				{/* Hero Image */}
				<div className="col-span-3 flex justify-end items-center  ">
					<img
						src={assets.header_img}
						alt="hero image"
						className=""
					/>
				</div>
			</div>

			{/* Steps Section */}
			<div className="w-full ~py-16/64 flex flex-col justify-center items-center ">
				<span className="~text-2xl/5xl font-bold">
					Get rid image backgrounds in Seconds
				</span>

				{/* Steps Grid */}
				<div className="w-full grid grid-cols-3 gap-16 py-32">
					{/* Item 1 */}
					<div className="w-full border-2 rounded-xl shadow-sm h-[250px] flex justify-center items-center">
						{" "}
						1
					</div>
					{/* Item 1 */}
					<div className="w-full border-2 rounded-xl shadow-sm h-[250px] flex justify-center items-center">
						{" "}
						2
					</div>
					{/* Item 1 */}
					<div className="w-full border-2 rounded-xl shadow-sm h-[250px] flex justify-center items-center">
						{" "}
						3
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
