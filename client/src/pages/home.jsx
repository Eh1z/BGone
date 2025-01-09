import React, { useState, useEffect } from "react";
import { UploadIcon, QuoteIcon } from "@radix-ui/react-icons";
import TextTransition, { presets } from "react-text-transition";
import { assets } from "../assets";
const TEXTS = [
	"Upload Your Image and See the Magic in Seconds.",
	"Try It Today and Transform Your Images Instantly.",
	"Experience the Power of AI For Free.",
	"Transform Your Images Today.",
];
const Home = () => {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			5000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div className="w-full flex flex-col items-center justify-start ~py-5/8 ~px-5/32">
			{/* Hero Section */}
			<div className="w-full grid grid-cols-1-reverse lg:grid-cols-6">
				{/* Hero Text */}
				<div className="flex flex-col gap-8 items-start justify-center col-span-3">
					<span className="~text-3xl/6xl font-black ">
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
				<span className="~text-xl/5xl font-bold text-gradient2 text-center">
					Remove Image Backgrounds <br /> in Just a Few Simple Steps
				</span>

				{/* Steps Grid */}
				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-16 ~py-8/16">
					{/* Item 1 */}
					<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex justify-start items-start gap-5 transition duration-500 hover:scale-105">
						<img src={assets.upload_icon} alt="Upload Icon" />
						<div className="flex flex-col justify-start items-start">
							<span className="~text-lg/2xl font-bold">
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
							<span className="~text-lg/2xl font-sbold">
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

			{/* Testimonials  Section */}
			<div className="w-full ~py-16/32 flex flex-col justify-center items-center ">
				<span className="~text-xl/5xl font-bold text-gradient2 text-center capitalize">
					Our custormers had this to say
				</span>

				{/* Testimonial Grid */}
				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-16 ~py-8/16">
					{/* Item 1 */}
					<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex flex-col justify-start items-start transition duration-500 hover:scale-105">
						<QuoteIcon
							style={{
								width: "32px",
								height: "32px",
								color: "var(--accent)",
							}}
						/>
						<p className="text-gradient2 text-left">
							This tool is a game-changer! It removed the
							background from my images flawlessly and saved me
							hours of editing. The process was so simple, and the
							quality was top-notch. Highly recommend!
						</p>
						<div className="flex justify-start items-center gap-3 mt-8">
							<img
								src={assets.profile_img_1}
								alt="Upload Icon"
								className="rounded-full w-12 h-12"
							/>
							<div className="flex flex-col">
								<span className="font-bold"> James Reed</span>
								<span className="uppercase text-xs font-medium">
									Freelance Designer
								</span>
							</div>
						</div>
					</div>
					{/* Item 2 */}
					<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex flex-col justify-start items-start transition duration-500 hover:scale-105">
						<QuoteIcon
							style={{
								width: "32px",
								height: "32px",
								color: "var(--accent)",
							}}
						/>
						<p className="text-gradient2 text-left">
							I needed a quick way to clean up product photos for
							my online store, and this was perfect. The results
							were professional, and I didn’t have to spend a
							penny. Amazing!
						</p>
						<div className="flex justify-start items-center gap-3 mt-8">
							<img
								src={assets.profile_img_2}
								alt="Upload Icon"
								className="rounded-full w-12 h-12"
							/>
							<div className="flex flex-col">
								<span className="font-bold">
									Michael Bennett
								</span>
								<span className="uppercase text-xs font-medium">
									E-commerce owner
								</span>
							</div>
						</div>
					</div>
					{/* Item 3 */}
					<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex flex-col justify-start items-start transition duration-500 hover:scale-105">
						<QuoteIcon
							style={{
								width: "32px",
								height: "32px",
								color: "var(--accent)",
							}}
						/>
						<p className="text-gradient2 text-left">
							As someone who isn’t tech-savvy, I was blown away by
							how easy it was to use. The background removal was
							precise, and the image quality was excellent.
							Absolutely love it!
						</p>
						<div className="flex justify-start items-center gap-3 mt-8">
							<img
								src={assets.profile_img_3}
								alt="Upload Icon"
								className="rounded-full w-12 h-12"
							/>
							<div className="flex flex-col">
								<span className="font-bold">
									Jonathan Carter
								</span>
								<span className="uppercase text-xs font-medium">
									Blogger
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="w-full ~py-3/32 flex flex-col justify-center items-center gap-16 ">
				<div className="text-center ~text-xl/5xl font-bold capitalize  w-full  flex items-center justify-center">
					<TextTransition springConfig={presets.wobbly}>
						<span className=" text-gradient2 w-full">
							{TEXTS[index % TEXTS.length]}
						</span>
					</TextTransition>
				</div>

				<div>
					<input type="file" name="" id="upload1" hidden />
					<label htmlFor="upload1" className="uploadBtn">
						<UploadIcon /> <span>Upload Image</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Home;
