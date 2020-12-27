import React from "react";
import PropTypes from "prop-types";
import { StyledMainHeading } from "../../styles/StyledComponents/styledCommon";

const MainHeader = props => {
    const { text, classType } = props;
    return(
        <StyledMainHeading>
            <h1 className={classType || null}>{text}</h1>
        </StyledMainHeading>
    )
}

export default MainHeader;

MainHeader.propTypes = {
    text: PropTypes.string.isRequired,
    classType: PropTypes.string,
};