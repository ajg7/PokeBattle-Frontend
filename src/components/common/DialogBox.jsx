import React, { useState, useRef } from "react";
import { uniqueNamesGenerator, countries, animals } from "unique-names-generator";
import { connect } from "react-redux";
import { StyledDialogBox } from "../../styles/common";
import PropTypes from "prop-types";
import { teams } from "../../store/actions/";
import { teamNameSchema } from "../../utils/formSchemas";
import { Button } from "../common";

const DialogBox = props => {
	const inputRef = useRef();
	const { makeNewTeam, modalHandler } = props;
	const [teamNameErrors, setTeamNameErrors] = useState("");

	const randomNameGenerator = () => {
		const randomName = uniqueNamesGenerator({
			dictionaries: [countries, animals],
			style: "capital",
			separator: " ",
		});
		inputRef.current.value = randomName;
	};

	const submitHandler = async event => {
		event.preventDefault();
		const userId = localStorage.getItem("userId");
		const teamName = inputRef.current.value;
		try {
			const valid = await teamNameSchema.isValid({ teamName });
			await teamNameSchema
				.validate({ teamName })
				.catch(error => setTeamNameErrors(error.errors));
			if (valid) {
				const newTeam = { userId, teamName };
				makeNewTeam(newTeam);
			}
		} finally {
			inputRef.current.value = "";
			modalHandler();
		}
	};

	return (
		<StyledDialogBox>
			<div className="dialog-box">
				<div className="dialog-box-content">
					<p>{teamNameErrors}</p>
					<form onSubmit={submitHandler}>
						<label>
							Team Name:
							<input type="text" ref={inputRef} />
						</label>
						<Button buttonText={"Submit"} />
					</form>
					<Button handleClick={modalHandler} buttonText={"Cancel"} />
					<Button handleClick={randomNameGenerator} buttonText={"Random Name"} />
				</div>
			</div>
		</StyledDialogBox>
	);
};

DialogBox.propTypes = {
	makeNewTeam: PropTypes.func,
	modalHandler: PropTypes.func,
};

export default connect(null, {
	makeNewTeam: teams.makeNewTeam,
})(DialogBox);
