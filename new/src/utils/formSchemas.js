import * as yup from "yup";

export const authSchema = yup.object().shape({
	email: yup.string().email("Must be valid email").required("No email provided"),
	password: yup
		.string()
		.required("No password provided")
		.min(8, "Password is too short! Should be 8 character minimum"),
});
