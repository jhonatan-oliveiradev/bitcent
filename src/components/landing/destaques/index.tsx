import Area from "../common/Area";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg";
import ResponsiveImage from "../common/ResponsiveImage";

export default function Destaques() {
	return (
		<Area id="inicio" className="pt-20">
			<div className={`flex items-center justify-around h-[500px]`}>
				<Slogan />
				<ResponsiveImage
					image={principal}
					className="rotate-3 hidden md:inline"
				/>
			</div>
		</Area>
	);
}
