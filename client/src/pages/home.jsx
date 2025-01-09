import { Hero, Steps, Showcase, Testimonials, CTA } from "../components";

const Home = () => {
	return (
		<div className="w-full flex flex-col items-center justify-start ~py-5/8 ~px-5/32">
			<Hero />
			<Steps />
			<Showcase />
			<Testimonials />
			<CTA />
		</div>
	);
};

export default Home;
