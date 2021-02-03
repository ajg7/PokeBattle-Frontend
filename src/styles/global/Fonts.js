import { createGlobalStyle } from "styled-components";

import PokeLogo from "../../assets/PocketMonk-15ze.ttf";
import ButtonText from "../../assets/SigmarOne-Regular.ttf";
import PikaText from "../../assets/DanisPikachu-jrG0.ttf";

export const Fonts = createGlobalStyle`
	@font-face {
		font-family: "PokeLogo";
		src: url(${PokeLogo});
	}
	
	@font-face {
		font-family: "ButtonText";
		src: url(${ButtonText})
	}

	@font-face {
		font-family: "PikaText";
		src: url(${PikaText});
	}

`;
