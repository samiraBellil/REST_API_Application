import { DELETE_CONTACTS, GET_CONTACTS } from './types';
import axios from 'axios';


export const getcontacts = () => dispatch => {
    axios.get("/contacts")
        .then(res => res.data)
        .then(contact => dispatch({
            type: GET_CONTACTS,
            payload: contact
        })
        )
}

export const deletecontacts = (id) => dispatch => {
    axios.delete(`/delete_contact/${id}`)
        .then(dispatch(getcontacts()))
}

export const addcontact = (newContact) => dispatch => {
    axios.post(`/new_contact`, newContact)
        .then(dispatch(getcontacts()))
}

export const modifyContact = (id, newContact) => dispatch => {
    axios.put(`/modify_contact/${id} `, newContact)
    .then(dispatch(getcontacts()))
}

