import { assets } from "../assets";

const Showcase = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center ">
			<div className="">
				<img
					src={assets.image_w_bg}
					alt=""
					className="w-full rounded-2xl"
				/>
			</div>
		</div>
	);
};

export default Showcase;
