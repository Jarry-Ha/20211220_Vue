
import axios from 'axios'
import {GET_CONTACTLIST, GET_CONTACT, ADD_CONTACT, DELETE_CONTACT, UPDATE_PHOTO, UPDATE_CONTACT} from './ContactURI'

const getContactListAPI = (pageno, pagesize) => {
    return axios.get(GET_CONTACTLIST, {params: {pageno, pagesize}});
};
const getContactAPI = (no) => {
    return axios.get(GET_CONTACT.replace('${no}', no))
}
const addContactAPI = (contact) => {
    return axios.post(ADD_CONTACT, contact);
};
const deleteContactAPI = (no) => {
    return axios.delete(DELETE_CONTACT.replace('${no}', no));
};
const updateContactAPI = (contact) => {
    return axios.put(UPDATE_CONTACT.replace('${no}', contact.no), contact);
};
const updatePhotoAPI = (no, file) => {
    const data = new FormData();
    data.append('photo', file);

    return axios.post(UPDATE_PHOTO.replace('${no}', no), data);
}

export {getContactListAPI, getContactAPI, addContactAPI, deleteContactAPI, updateContactAPI, updatePhotoAPI}
