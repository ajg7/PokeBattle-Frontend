import React from "react";
import clearButton from "../assets/clearButton.png";
import addButton from "../assets/addButton.png";

const DropBar = props => {
    return (
        <>
            <div className="team-slots">
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
        </>
    )
}

export default DropBar;