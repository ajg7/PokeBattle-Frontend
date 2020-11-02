import styled from "styled-components";

export const StyledThemePill = styled.div`
    display: flex;
    justify-content: ${({ secondaryType }) => {
        if (secondaryType !== null) {
            return "space-around"
        }
    }};
    margin: ${({ secondaryType }) => {
        if (secondaryType === null) {
            return "0 5px"
        }
    }};

    .type-pill-primary {
        background-color: ${({ theme, type }) => {
            return theme.types[type];
        }};
        border-radius: 5px;
        width: 45%;
    }
    .type-pill-secondary {
        background-color: ${({ theme, secondaryType }) => {
            return theme.types[secondaryType];
        }};
        border-radius: 5px;
        width: ${({ secondaryType }) => {
            if (secondaryType === null) {
                return "0%"
            } else {
                return "45%"
            }
        }};
        
    }
`
