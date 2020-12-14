import styled from "styled-components";


export const StyledLandingPage = styled.div`
    background-color: ${({ theme }) => theme.colorThemes.tertiary};
    color: ${({ theme }) => theme.colorThemes.quaternary};

    footer {
        font-size: 18px;
        font-family: ${({ theme }) => theme.pokeTextFont}, monospace;
    }
`