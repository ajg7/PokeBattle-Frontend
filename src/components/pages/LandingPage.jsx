import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../../store/actions/actions"
import { useHistory } from "react-router-dom";
import { StyledLandingPage } from "../../styles/StyledComponents/styledPages";
import { StyledMainHeader } from "../../styles/StyledComponents/styledCommon";
import { Button, MainHeader } from "../common";

const LandingPage = props => {

    const { fetchPokemon } = props;
    const history = useHistory();
    
    const signupHandler = event => {
        history.push("/signup")
    }

    const loginHandler = event => {
        history.push("/login")
    }

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon])

    return(
        <StyledLandingPage>
            <StyledMainHeader>
                <MainHeader text={"PokeBattle"} classType={"title"} />
            </StyledMainHeader>
            <div>
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
        </StyledLandingPage>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData
    }
} 

export default connect(mapStateToProps, { fetchPokemon })(LandingPage);