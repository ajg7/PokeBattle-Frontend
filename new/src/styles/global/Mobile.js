import { createGlobalStyle } from "styled-components";
import pixelToViewportWidth from "../../utils/pixelToViewportWidth";

export const Mobile = createGlobalStyle`
    :root {
        font-size: ${pixelToViewportWidth(24)};

        @media (max-width: 768px) {
            font-size: ${pixelToViewportWidth(18)};
        }

        @media (min-width: 1024px) {
            font-size: ${pixelToViewportWidth(16)};
        }
    }

`;
