import styled from "styled-components";

export const StyledButton = styled.div`

img {
    height: 30px;
    width: 30px;

}

button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    width: 150px;
    background-color: ${({ theme }) => theme.colorThemes.secondary};
    color: ${({ theme }) => theme.colorThemes.white};
    border-radius: 16px;
    font-weight: bold;

    &:hover {
        background-color: ${({ theme }) => theme.colorThemes.primary};
    }
}



`