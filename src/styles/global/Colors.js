import { createGlobalStyle } from "styled-components";

export const Colors = createGlobalStyle`

    body {
        background-color: ${({ theme }) => theme.colorThemes.primary};
    }

    h1 {
        -webkit-text-stroke: 5px ${({ theme }) => theme.colorThemes.tertiary};
        -webkit-text-fill-color: ${({ theme }) => theme.colorThemes.quaternary};
    }

    

`;
