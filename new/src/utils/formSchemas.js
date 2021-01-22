import * as yup from "yup";

export const authSchema = yup.object().shape({
	email: yup.string().email("Must be valid email").required("No email provided"),
	password: yup
		.string()
		.required("No password provided")
		.min(8, "Password is too short! Should be 8 character minimum"),
});

export const teamNameSchema = yup.object().shape({
	teamName: yup.string().required("Must Enter a Team Name").max(28, "Too Many Characters"),
});

export const teamNumberSchema = yup.object().shape({
	currentTeam: yup.array().max(5, "Can only have 6 team members"),
});
