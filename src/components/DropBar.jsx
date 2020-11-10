import React from "react";
import clearButton from "../assets/clearButton.png";
import addButton from "../assets/addButton.png";


const DropBar = props => {

    const allowDrop = event => {
        event.preventDefault();
    }

    const drag = event => {

    }

    const drop = event => {
        event.preventDefault();
        
    }

    return (
        <>
            <div className="slot-container">
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