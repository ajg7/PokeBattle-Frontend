import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../../styles/common";

const Button = props => {
	const { handleClick, disabled, classType, buttonText, id, type1, type2, img, name } = props;

	return (
		<StyledButton data-testid="test-button" className={"button-component"}>
			<button
				onClick={handleClick}
				disabled={disabled}
				className={classType || null}
				id={id}
				type1={type1}
				type2={type2}
				img={img}
				name={name}
			>
				{buttonText}
			</button>
		</StyledButton>
	);
};

Button.propTypes = {
	type1: PropTypes.string,
	type2: PropTypes.string,
	img: PropTypes.string,
	name: PropTypes.string,
	buttonText: PropTypes.string,
	classType: PropTypes.string,
	disabled: PropTypes.bool,
	handleClick: PropTypes.func,
	id: PropTypes.number,
};

export default Button;
