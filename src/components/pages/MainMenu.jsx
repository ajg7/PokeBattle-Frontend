import React, { useState } from "react";
import { StyledMainMenu } from "../../styles/StyledComponents/styledPages";
import { MainHeading, Modal, Team } from "../common";
import { useHistory } from "react-router-dom";

const MainMenu = props => {

    const history = useHistory();
    // const [modalOpen, setModalOpen] = useState(false);

    // const modalHandler = event => setModalOpen(!modalOpen);

    const whosThatPokemonHandler = event => history.push("/guess_pokemon");

    return (
        <div>
        {/*modalOpen ? <div onClick={modalHandler}>
            <Modal modalHandler={modalHandler} />
    </div> : null*/}
        <StyledMainMenu>
        <header>
            <MainHeading
            classType={"main-menu-header"}
            text={"Main Menu"}
            />
        </header>
        <section>
            <h3>Make New Team</h3>
            <Team />
            {/* There will be JSON that will contain your teams, and I will map over and insert into the Team COmponent */}
        </section>
        <footer>
        
        </footer>
        </StyledMainMenu>
        </div>
    )
}

export default MainMenu;