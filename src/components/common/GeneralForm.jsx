import React, { useRef } from "react";

const GeneralForm = props => {

    const { label, placeholder } = props;

    const inputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const input = inputRef.current.value;
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
            </form>
        </div>
    )


}

export default GeneralForm;