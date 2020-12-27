import React, { useState } from "react";
import { StyledMainMenu } from "../../styles/StyledComponents/styledPages";
import { MainHeading, Modal } from "../common";
import { useHistory } from "react-router-dom";

const MainMenu = props => {

    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandler = event => {
        setModalOpen(!modalOpen)
    } 

    const whosThatPokemonHandler = event => {
        history.push("/guess_pokemon");
    }



    return (
        <div>
        {modalOpen ? <div>
            <Modal modalHandler={modalHandler} />
        </div> : null}
        <StyledMainMenu>
            <MainHeading
            classType={"main-menu-header"}
            text={"Main Menu"}
            />
            <section className="main-menu-table">
                <div className="top-sections">
                    <section onClick={modalHandler}>
                        <h3>Make a Team!</h3>
                        <p>
                            add pokemon via drag-and-drop, and look at their cards
                            When clicked, it should show a modal that confirms whether you want to make a new team or not
                            if (answer === yes) then push to pokemon list & make team
                            Where you can add nicknames, delete members, delete teams, and search for new pokemon to add to a team
                        </p>
                    </section>
                    <section>
                        <h3>Battle Random Team!</h3>
                        <p>
                            A modal will pop up, where you can select your team, which will then send you to OnDeck page, where you will confirm
                        </p>
                    </section>
                </div>
                <div className="bottom-sections">
                    <section onClick={whosThatPokemonHandler}>
                        <h3>Who's That Pokemon?</h3>
                        <p>Mini game where you have to guess the name of the pokemon</p>
                    </section>
                    <section>
                        <h3>Battle Others!</h3>
                        <p>Here is where you can battle other users</p>
                    </section>
                </div>
            </section>
        </StyledMainMenu>
        </div>
    )
}

export default MainMenu;