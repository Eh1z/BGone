import React, { useState, useEffect } from "react";
import { UploadIcon } from "@radix-ui/react-icons";
import TextTransition, { presets } from "react-text-transition";
const TEXTS = [
	"Upload Your Image and See the Magic in Seconds.",
	"Try It Today and Transform Your Images Instantly.",
	"Experience the Power of AI For Free.",
	"Transform Your Images Today.",
];

const CTA = () => {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			5000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div className="w-full ~py-5/16 flex flex-col justify-center items-center gap-12 ">
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
	);
};

export default CTA;
