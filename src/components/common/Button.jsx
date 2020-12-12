import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../../styles/StyledComponents/styledCommon";
import pikachu from "../../assets/pika.png";

const Button = props => {
    const { handleClick, isDisabled, classType, buttonText } = props;
    

    return (
        <StyledButton>
            <button
                onClick={handleClick}
                disbaled={isDisabled}
                className={classType || null}
            >
                <img src={pikachu} alt={"pikachu"} />
                {buttonText}
            </button>
        </StyledButton>
    )
}

export default Button;

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    classType: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
};