import React, { useState } from "react";
import { StyledModal } from "../../styles/StyledComponents/styledCommon";
import { useHistory } from "react-router-dom";
import addButton from "../../assets/addButton.png";
import mew from "../../assets/mew.jpg";
import mewHover from "../../assets/mewHover.png";

const Modal = props => {

    const { modalHandler } = props;
    const history = useHistory();
    const [hoverImg, setHoverImg] = useState(false);

    const makeTeamHandler = event => {
        history.push("/pokemon_list")
    }

    const mouseOver = event => {
        setHoverImg(true);
    }
    
    const mouseExit = event => {
        setHoverImg(false);
    }

    return (
        <StyledModal>
        <div className="modal">
            <div className="modal-content">
            {
                hoverImg 
                ? <img src={mewHover} alt={"exit active"} onMouseLeave={mouseExit} className="exit-button" onClick={modalHandler} /> 
                : <img src={mew} alt={"exit"} className="exit-button" onMouseOver={mouseOver} />
            }
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