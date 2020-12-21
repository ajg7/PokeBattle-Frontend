import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../../styles/StyledComponents/styledCommon";
import pikachu from "../../assets/pika.png";
import otherPikachu from "../../assets/otherPika.png";

const Button = props => {
    const { handleClick, isDisabled, classType, buttonText } = props;
    const [pika, setPika] = useState(1);

    const mouseOver = event => setPika(2);
    const mouseLeave = event => setPika(1);
    

    return (
        <StyledButton>
            <button
                onClick={handleClick}
                disabled={isDisabled}
                className={classType || null}
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
            >
                <img src={pika === 1 ? pikachu : otherPikachu} alt={"pikachu"} />
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