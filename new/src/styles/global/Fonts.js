import { injectGlobal } from "styled-components";
import pokeTitleFont from "../../assets/PocketMonk-15ze.ttf";

/*
@import url("https:fonts.googleapis.com/css?family=Sigmar+One");
@font-face {
	font-family: pokeTitleFont;
	src: url("../../assets/PocketMonk-15ze.ttf");
}
@font-face {
	font-family: unownText;
	src: url("../../assets/Unown-OVEwA.ttf");
}
@font-face {
	font-family: pikaText;
	src: url("../../assets/DanisPikachu-jrG0.ttf");
}
*/

injectGlobal`
	@font-face {
		font-family: pokeTitleFont;
		src: url(${pokeTitleFont});
	}
`;
