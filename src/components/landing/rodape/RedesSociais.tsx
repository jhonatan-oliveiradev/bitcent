import {
	IconBrandFacebook,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandYoutube,
} from "@tabler/icons-react";
import RedeSocial from "./RedeSocial";

export default function RedesSociais() {
	return (
		<div className="flex">
			<RedeSocial
				icone={<IconBrandYoutube />}
				url="https://www.youtube.com/@pallas"
			/>
			<RedeSocial
				icone={<IconBrandInstagram />}
				url="https://www.instagram.com/pallasdesign1"
			/>
			<RedeSocial
				icone={<IconBrandFacebook />}
				url="https://www.facebook.com/eujhonatanoliveira/"
			/>
			<RedeSocial
				icone={<IconBrandGithub />}
				url="https://github.com/jhonatan-oliveiradev"
			/>
		</div>
	);
}
