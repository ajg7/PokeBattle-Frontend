import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colorThemes.tertiary};
        color: ${({ theme }) => theme.colorThemes.quaternary};
    }


`