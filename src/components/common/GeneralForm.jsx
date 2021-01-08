import React, { useRef } from "react";
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
        </div>
    )


}

export default connect(state => ({
    
}), {
    editTeamName: team.editTeamName
})(GeneralForm);