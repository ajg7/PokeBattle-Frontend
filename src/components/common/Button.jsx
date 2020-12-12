import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../../styles/StyledComponents/styledCommon";

const Button = props => {
    const { handleClick, isDisabled, classType, img, alt, buttonText } = props;

    return (
        <StyledButton>
            <button
                onClick={handleClick}
                disbaled={isDisabled}
                className={classType || null}
            >
                <img src={img} alt={alt} />
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