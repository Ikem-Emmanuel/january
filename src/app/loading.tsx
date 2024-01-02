import "../styles/Loader.module.css";
import React from "react";
const Loader = () => {
	const totalParticles = 400;
	return (
		<div className="flex items-center justify-center flex-col h-screen -mt-32">
			<div className="flex space-x-2 justify-center items-center mb-10   dark:invert">
				<span className="sr-only">Loading...</span>
				<div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
				<div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
				<div className="h-8 w-8 bg-primary rounded-full animate-bounce"></div>
			</div>

			<h2 className="text-2xl text-center">
				Hanging out with loading bars... this might take a sec!
			</h2>
		</div>
	);
};

export default Loader;
