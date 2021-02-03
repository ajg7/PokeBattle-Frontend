import { createGlobalStyle } from "styled-components";

import PokeLogo from "../../assets/PocketMonk-15ze.ttf";
import ButtonText from "../../assets/SigmarOne-Regular.ttf";
import GBText from "../../assets/PokemonGb-RAeo.ttf";
import h2Font from "../../assets/secondHeading.ttf";

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
		font-family: "GBText";
		src: url(${GBText});
	}

	@font-face {
		font-family: "h2Font";
		src: url(${h2Font});
	}


	h1 {
		font-family: "PokeLogo";
	}

	h2 {
		font-family: "h2Font";
	}

	button {
		font-family: "ButtonText";
	}

	p, label, input, h3, select {
		font-family: "GBText";
	}
`;
