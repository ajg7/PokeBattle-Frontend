import React from "react";
import PropTypes from "prop-types";
import { StyledLogo } from "../../styles/common";

const Logo = props => {
	const { logo } = props;
	return (
		<div>
			<StyledLogo>{logo}</StyledLogo>
		</div>
	);
};

Logo.propTypes = {
	logo: PropTypes.string,
};

export default Logo;
