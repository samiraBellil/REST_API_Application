import uuid from 'uuid';
import {GET_CONTACTS } from '../actions/types';



const ContactReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return action.payload;

        // case DELETE_CONTACTS:
        //     return state.filter(el => el._id !== action.payload);


        // case ADD_CONTACT:
        //     return [...state, action.newContact]

        // case EDIT_CONTACT:
        //     return state.map(el => (el.id === action.payload.id ? action.payload : el));

        default:
            return state;
    }
}
export default ContactReducer;