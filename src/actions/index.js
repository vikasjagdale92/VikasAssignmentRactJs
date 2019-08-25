import { SUBMIT_LOGIN_FORM } from "../constants/action-types";

export const submitFormData = (formData) => {   
    return{
        type: SUBMIT_LOGIN_FORM,
        payload: formData
    }
}