export class FormValues {
    constructor(email, password, isAdmin){
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin
    }
}

export const initialFormValues = new FormValues("", "", false);

