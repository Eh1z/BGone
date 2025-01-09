import React from "react";
import { assets } from "../assets";

const Results = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center ~py-8/16 ~px-3/32">
			<div className="w-full shadow-lg shadow-slate-300 rounded-xl border border-[--secondary] p-8 flex flex-col justify-between ~gap-8/16 items-end">
				{/* Images */}
				<div className="w-full flex gap-16 items-center justify-center">
					{/* Original */}
					<div>
						<span className="font-bold ~text-sm/xl">Original</span>
						<div className="mt-3">
							<img
								src={assets.image_w_bg}
								alt=""
								className="w-full rounded-2xl"
							/>
						</div>
					</div>

					{/* Removed */}
					<div>
						<span className="font-bold ~text-sm/xl">
							Background Removed
						</span>
						<div className="mt-3">
							<img
								src={assets.image_wo_bg}
								alt=""
								className="w-full rounded-2xl"
							/>
						</div>
					</div>
				</div>

				{/* Buttons */}
				<div className="flex items-center gap-6">
					<button className="secondaryBtn bg-transparent border-2 border-[--accent]">
						Try Another Image
					</button>
					<button className="downloadBtn">Download Image</button>
				</div>
			</div>
		</div>
	);
};

export default Results;
