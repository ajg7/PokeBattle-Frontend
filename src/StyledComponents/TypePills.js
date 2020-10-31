import styled from "styled-components";

export const StyledThemePill = styled.div`
    display: flex;

    .type-pill-primary {
        background-color: ${({ theme, type }) => {
            return theme.types[type];
        }};
        border-radius: 5px;
        width: ${({ secondaryType }) => {
            if (secondaryType === null) {
                return "100%"
            } else {
                return "50%"
            }
        }}
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
                return "50%"
            }
        }}
    }
`
