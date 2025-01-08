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
						<span className="text-gradient1">backgrounds</span>{" "}
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
			<div className="w-full ~py-16/32 flex flex-col justify-center items-center ">
				<span className="~text-2xl/5xl font-semibold text-gradient2 text-center">
					Remove Image Backgrounds <br /> in Just a Few Simple Steps
				</span>

				{/* Steps Grid */}
				<div className="w-full grid grid-cols-3 gap-16 ~py-8/16">
					{/* Item 1 */}
					<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex justify-start items-start gap-5 transition duration-500 hover:scale-105">
						<img src={assets.upload_icon} alt="Upload Icon" />
						<div className="flex flex-col justify-start items-start">
							<span className="~text-lg/2xl font-semibold">
								Upload Image
							</span>
							<p className="text-gradient2 text-left">
								Select and upload your image to get started. No
								registration required.
							</p>
						</div>
					</div>

					{/* Item 2 */}
					<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex justify-start items-start gap-5 transition duration-500 hover:scale-105">
						<img
							src={assets.remove_bg_icon}
							alt="Remove Background Icon"
						/>
						<div className="flex flex-col justify-start items-start">
							<span className="~text-lg/2xl font-semibold">
								Remove Background
							</span>
							<p className="text-gradient2">
								Our tool automatically removes the background
								for a clean result.
							</p>
						</div>
					</div>

					{/* Item 3 */}
					<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex justify-start items-start gap-5 transition duration-500 hover:scale-105">
						<img src={assets.download_icon} alt="Download Icon" />
						<div className="flex flex-col justify-start items-start">
							<span className="~text-lg/2xl font-semibold">
								Download Image
							</span>
							<p className="text-gradient2">
								Download your edited image instantly in high
								quality for free.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Showcase  */}
			<div className="w-full flex flex-col justify-center items-center ">
				<div className="">
					<img
						src={assets.image_w_bg}
						alt=""
						className="w-full rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
