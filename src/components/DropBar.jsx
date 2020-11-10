import React from "react";
import { StyledBar } from "../StyledComponents/StyledBar";
import clearButton from "../assets/clearButton.png";
import addButton from "../assets/addButton.png";

const DropBar = props => {
    return (
        <>
            <StyledBar>
                <div>
                    <img src={clearButton} alt="clear team button" className="clear-button" />
                    <div className="slot">
                    </div>
                    <div className="slot">
                    </div>
                    <div className="slot">
                    </div>
                    <div className="slot">
                    </div>
                    <div className="slot">
                    </div>
                    <div className="slot">
                    </div>
                    <img src={addButton} alt="make team button" className="add-button" />
                </div>
            </StyledBar>
        </>
    )
}

export default DropBar;