import styled from "styled-components";

export const StyledThemePill = styled.div`
    display: flex;

    justify-content: ${({ secondaryType }) => {
        if (secondaryType !== null) {
            return "space-evenly"
        } else {
            return "center"
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
        color: ${({ type }) => {
            switch(type) {
                case "poison":
                    return "white";
                case "water":
                    return "white";
                case "fire":
                    return "white";
                case "bug":
                    return "white";
                case "fighting":
                    return "white";
                case "psychic":
                    return "white";
                case "rock":
                    return "white";
                case "ghost":
                    return "white";
                case "dragon":
                    return "white";
                default:
                    return "black";
            }
        }};
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
        color: ${({ secondaryType }) => {
            switch(secondaryType) {
                case "poison":
                    return "white";
                case "water":
                    return "white";
                case "fire":
                    return "white";
                case "bug":
                    return "white";
                case "fighting":
                    return "white";
                case "psychic":
                    return "white";
                case "rock":
                    return "white";
                case "ghost":
                    return "white";
                case "dragon":
                    return "white";
                default:
                    return "black";
            }
        }};
    }
`
