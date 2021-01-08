import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pokemon } from "../../store/actions/"
import { useHistory } from "react-router-dom";
import { StyledMainHeading } from "../../styles/StyledComponents/styledCommon";
import { StyledLandingPage } from "../../styles/StyledComponents/styledPages";
import { Button, MainHeading, FeaturedPokemon, Wallpaper } from "../common";

const LandingPage = props => {

    const { fetchPokemon, pokemonData } = props;
    const history = useHistory();
    
    const signupHandler = event => history.push("/signup");

    const loginHandler = event => history.push("/login");

    useEffect(() => {
        fetchPokemon();
        if (localStorage.getItem("token")) history.push("/main_menu")
    }, [fetchPokemon, history])


    return(
        <StyledLandingPage>
            <header>
                <MainHeading text={"PokéBattle"} classType={"title"} />
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
    )
}

export default connect(
    state => ({
        pokemonData: state.pokemonData,
}), { 
    fetchPokemon: pokemon.fetchPokemon 
})(LandingPage);