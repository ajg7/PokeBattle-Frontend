import React from "react";
import { StyledModal } from "../../styles/StyledComponents/styledCommon";
import { useHistory } from "react-router-dom";
import addButton from "../../assets/addButton.png";
import clearButton from "../../assets/clearButton.png";

const Modal = props => {

    const { modalHandler } = props;
    const history = useHistory();

    const makeTeamHandler = event => {
        history.push("/pokemon_list")
    }

    return (
        <StyledModal>
        <div className="modal">
            <div className="modal-content">
            <img src={clearButton} alt={"exit"} onClick={modalHandler} />
                <div className="modal-container">
                    <h3>Your Teams</h3>
                    <div className={"new-team-button"}>
                        <img src={addButton} alt={"add a team"} onClick={makeTeamHandler} />
                        <h4>Make a New Team</h4>
                    </div>
                </div>
            </div>
        </div>
        </StyledModal>
    )
}

export default Modal;