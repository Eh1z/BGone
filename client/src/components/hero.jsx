import { assets } from "../assets";
import { UploadIcon } from "@radix-ui/react-icons";

const Hero = () => {
	return (
		<div className="w-full grid gap-8 grid-cols-1-reverse lg:grid-cols-6 ~py-8/32">
			{/* Hero Text */}
			<div className=" flex flex-col gap-8 items-start justify-center col-span-3">
				<span className="~text-3xl/6xl font-black ">
					Remove Image <br />
					<span className="text-gradient1">backgrounds</span>{" "}
					Instantly <br />
					online for free.
				</span>
				<p className="~text-sm/xl max-w-[600px]">
					Upload your image and remove the background instantly—for
					free! No design skills, no software, no hassle.
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
				<img src={assets.header_img} alt="hero image" className="" />
			</div>
		</div>
	);
};

export default Hero;
