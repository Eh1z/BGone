import { assets } from "../assets";
import { QuoteIcon } from "@radix-ui/react-icons";

const Testimonials = () => {
	return (
		<div className="w-full ~py-16/32 flex flex-col justify-center items-center ">
			<span className="~text-xl/5xl font-bold text-gradient2 text-center capitalize">
				Our custormers had this to say
			</span>

			{/* Testimonial Grid */}
			<div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-16 ~py-8/16">
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
						This tool is a game-changer! It removed the background
						from my images flawlessly and saved me hours of editing.
						The process was so simple, and the quality was
						top-notch. Highly recommend!
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
						I needed a quick way to clean up product photos for my
						online store, and this was perfect. The results were
						professional, and I didn’t have to spend a penny.
						Amazing!
					</p>
					<div className="flex justify-start items-center gap-3 mt-8">
						<img
							src={assets.profile_img_2}
							alt="Upload Icon"
							className="rounded-full w-12 h-12"
						/>
						<div className="flex flex-col">
							<span className="font-bold">Michael Bennett</span>
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
						As someone who isn’t tech-savvy, I was blown away by how
						easy it was to use. The background removal was precise,
						and the image quality was excellent. Absolutely love it!
					</p>
					<div className="flex justify-start items-center gap-3 mt-8">
						<img
							src={assets.profile_img_3}
							alt="Upload Icon"
							className="rounded-full w-12 h-12"
						/>
						<div className="flex flex-col">
							<span className="font-bold">Jonathan Carter</span>
							<span className="uppercase text-xs font-medium">
								Blogger
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
