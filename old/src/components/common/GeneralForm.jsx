import React, { useState, useRef } from "react";
import { uniqueNamesGenerator, Cofig, adjectives, colors, animals } from "unique-names-generator"
import { connect } from "react-redux";
import { team } from "../../store/actions";

const GeneralForm = props => {

    const { label, placeholder, teamId, editTeamName } = props;

    const inputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const input = inputRef.current.value;
        console.log(input)
        editTeamName(input, teamId)
    }

    const randomNameGenerator = event => {
        const randomName = uniqueNamesGenerator({ 
            dictionaries: [adjectives, colors, animals],
            style: "capital",
            separator: " "
        });
        console.log(randomName)
        editTeamName(randomName, teamId)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                {label}
                    <input 
                    placeholder={placeholder}
                    type="text"
                    ref={inputRef}
                    />
                </label>
                <button>Submit</button>
            </form>
            <button onClick={randomNameGenerator}>Generate Random Team Name</button>
        </div>
    )


}

export default connect(state => ({
    
}), {
    editTeamName: team.editTeamName
})(GeneralForm);