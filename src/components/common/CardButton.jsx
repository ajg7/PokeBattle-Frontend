import React from "react";

const CardButton = props => {
    const { buttonText } = props;
    return (
        <>
            <button>
            {buttonText}
            </button>
        </>
    )

}

export default CardButton;