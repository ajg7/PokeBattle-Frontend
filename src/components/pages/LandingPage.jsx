import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../../store/actions/actions"
import { useHistory } from "react-router-dom";
import { StyledLandingPage } from "../../styles/StyledComponents/styledPages";
import { StyledMainHeading } from "../../styles/StyledComponents/styledCommon";
import { Button, MainHeading, FeaturedPokemon } from "../common";

const LandingPage = props => {

    const { fetchPokemon } = props;
    const history = useHistory();
    
    const signupHandler = event => history.push("/signup");

    const loginHandler = event => history.push("/login");

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon])

    return(
        <StyledLandingPage>
            <header>
                <StyledMainHeading>
                    <MainHeading text={"PokéBattle"} classType={"title"} />
                </StyledMainHeading>
            </header>
            <section>
                <FeaturedPokemon />
                <Button 
                handleClick={signupHandler}
                isDisabled={false}
                classType="signup-button"
                buttonText={"Sign Up"}
                />
                <Button 
                handleClick={loginHandler}
                isDisabled={false}
                classType="login-button"
                buttonText={"Login"}
                />
            </section>
            <footer>
                <div>
                    <nav>
                        <h3>Contact Me</h3>
                        <h3>About</h3>
                    </nav>
                </div>
            </footer>
        </StyledLandingPage>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData
    }
} 

export default connect(mapStateToProps, { fetchPokemon })(LandingPage);