import { assets } from "../assets";

const Steps = () => {
	return (
		<div className="w-full ~py-16/32 flex flex-col justify-center items-center ">
			<span className="~text-xl/5xl font-bold text-gradient2 text-center">
				Remove Image Backgrounds <br /> in Just a Few Simple Steps
			</span>

			{/* Steps Grid */}
			<div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-16 ~py-8/16">
				{/* Item 1 */}
				<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex justify-start items-start gap-5 transition duration-500 hover:scale-105">
					<img src={assets.upload_icon} alt="Upload Icon" />
					<div className="flex flex-col justify-start items-start">
						<span className="~text-base/2xl font-semibold">
							Upload Image
						</span>
						<p className="text-gradient2 ~text-xs/base">
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
						<span className="~text-base/2xl font-semibold">
							Remove Background
						</span>
						<p className="text-gradient2 ~text-xs/base">
							Our tool automatically removes the background for a
							clean result.
						</p>
					</div>
				</div>

				{/* Item 3 */}
				<div className="w-full p-8 border border-[--secondary] rounded-xl shadow-xl shadow-slate-200 flex justify-start items-start gap-5 transition duration-500 hover:scale-105">
					<img src={assets.download_icon} alt="Download Icon" />
					<div className="flex flex-col justify-start items-start">
						<span className="~text-base/2xl font-semibold">
							Download Image
						</span>
						<p className="text-gradient2 ~text-xs/base">
							Download your edited image instantly in high quality
							for free.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Steps;
