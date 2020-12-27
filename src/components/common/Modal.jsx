import React from "react";
import { StyledModal } from "../../styles/StyledComponents/styledCommon";
import addButton from "../../assets/addButton.png";
import clearButton from "../../assets/clearButton.png";

const Modal = props => {

    const { modalHandler } = props;
    return (
        <StyledModal>
        <div className="modal">
            <div className="modal-content">
            <img src={clearButton} alt={"exit"} onClick={modalHandler} />
                <div className="modal-container">
                    <h3>Your Teams</h3>
                    <div className={"new-team-button"}>
                        <img src={addButton} alt={"add a team"} />
                        <h4>Make a New Team</h4>
                    </div>
                </div>
            </div>
        </div>
        </StyledModal>
    )
}

export default Modal;