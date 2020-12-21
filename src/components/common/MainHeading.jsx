import React from "react";
import PropTypes from "prop-types";

const MainHeader = props => {
    const { text, classType } = props;
    return(
        <div>
            <h1 className={classType || null}>{text}</h1>
        </div>
    )
}

export default MainHeader;

MainHeader.propTypes = {
    text: PropTypes.string.isRequired,
    classType: PropTypes.string,
};