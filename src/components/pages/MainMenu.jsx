import React from "react";
import { StyledMainMenu } from "../../styles/StyledComponents/styledPages";
import { MainHeading } from "../common";

const MainMenu = props => {
    return (
        <StyledMainMenu>
            <MainHeading
            classType={"main-menu-header"}
            text={"Main Menu"}
            />
            <section className="main-menu-table">
                <div className="top-sections">
                    <section>
                        <h3>Make a Team</h3>
                        <p>add pokemon via drag-and-drop, and look at their cards</p>
                    </section>
                    <section>
                        <h3>Battle!</h3>
                        <p>A modal will pop up, where you can select your team, which will then send you to OnDeck page</p>
                    </section>
                </div>
                <div className="bottom-sections">
                    <section>
                        <h3>Who's That Pokemon?</h3>
                        <p>Mini game where you have to guess the name of the pokemon</p>
                    </section>
                    <section>
                        <h3>Edit Team</h3>
                        <p>Where you can add nicknames, delete members, and search for new ones to add</p>
                    </section>
                </div>
            </section>
        </StyledMainMenu>
    )
}

export default MainMenu;