import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../../styles/common";

const Button = props => {
	const { handleClick, disabled, classType, buttonText, id } = props;

	return (
		<StyledButton data-testid="test-button" className={"button-component"}>
			<button onClick={handleClick} disabled={disabled} className={classType || null} id={id}>
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
	id: PropTypes.number,
};

export default Button;
