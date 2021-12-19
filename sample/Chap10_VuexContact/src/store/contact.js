import {getContactListAPI, getContactAPI, deleteContactAPI, updateContactAPI, } from './../api/ContactAxios'

const CONTACT_GETCONTACTLIST = 'contact_getContactList';
const CONTACT_GETCONTACT = 'contact_getContact';
const CONTACT_ADDCONTACT = 'contact_addContact';
const CONTACT_UPDATECONTACT = 'contact_updateContact';
const CONTACT_DELETECONTACT = 'contact_deleteContact';
const CONTACT_CHANGECONTACT = 'contact_changeContact';

const contact = {
    namespaced: true,
    state: {
        contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
        contact: {no: '', name: '', tel: '', address: ''}
    },
    mutations: {
        
    },
    actions: {

    },
    getters: {

    }
};
export default contact;
