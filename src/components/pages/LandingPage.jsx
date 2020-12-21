import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../../store/actions/actions"
import { useHistory } from "react-router-dom";
import { StyledMainHeading } from "../../styles/StyledComponents/styledCommon";
import { StyledLandingPage } from "../../styles/StyledComponents/styledPages";
import { Button, MainHeading, FeaturedPokemon, Wallpaper } from "../common";

const LandingPage = props => {

    const { fetchPokemon } = props;
    const history = useHistory();
    
    const signupHandler = event => history.push("/signup");

    const loginHandler = event => history.push("/login");

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon])


    return(
        <>
            <StyledLandingPage>
                <header>
                    <StyledMainHeading>
                        <MainHeading text={"PokéBattle"} classType={"title"} />
                    </StyledMainHeading>
                </header>
                <section className="call-to-action">
                    <div className="featured-pokemon">
                        <FeaturedPokemon />
                    </div>
                    <div className="call-to-action-buttons">
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
                    </div>
                </section>
            </StyledLandingPage>
        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData
    }
} 

export default connect(mapStateToProps, { fetchPokemon })(LandingPage);