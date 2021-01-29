import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../../styles/common";

const Button = props => {
	const { handleClick, disabled, classType, buttonText } = props;

	return (
		<StyledButton data-testid="test-button">
			<button onClick={handleClick} disabled={disabled} className={classType || null}>
				{buttonText}
			</button>
		</StyledButton>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string,
	classType: PropTypes.string,
	disabled: PropTypes.bool,
	handleClick: PropTypes.func,
};

export default Button;
