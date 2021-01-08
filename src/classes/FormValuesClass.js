export class FormValues {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

export const initialFormValues = new FormValues("", "");

