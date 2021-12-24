import {getContactListAPI, getContactAPI, addContactAPI, deleteContactAPI, updateContactAPI, } from './../api/ContactAxios'

const CONTACT_GETCONTACTLIST = 'contact_getContactList';
const CONTACT_GETCONTACT = 'contact_getContact';
// const CONTACT_ADDCONTACT = 'contact_addContact';
// const CONTACT_UPDATECONTACT = 'contact_updateContact';
// const CONTACT_DELETECONTACT = 'contact_deleteContact';
const CONTACT_CHANGECONTACT = 'contact_changeContact';

const contact = {
    namespaced: true,
    state: {
        contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
        contact: {no: '', name: '', tel: '', address: ''}
    },
    mutations: {
        [CONTACT_GETCONTACTLIST]: (state, payload) => {
            state.contactList = payload;
        },
        [CONTACT_GETCONTACT]: (state, payload) => {
            state.contact = payload;
        },
        [CONTACT_CHANGECONTACT]: (state, payload) => {
            state.contact[payload.name] = payload.value;
        }
    },
    actions: {
        getContactListAction: (action, value) => {              // value => {no: 1, size: 10}
            getContactListAPI(value.no, value.size)
            .then( resp => action.commit(CONTACT_GETCONTACTLIST, resp.data) )
            .catch( error => console.error(error) )
        },
        getContactAction: (action, value) => {                  // value => id
            getContactAPI(value)
            .then( resp => action.commit(CONTACT_GETCONTACT, resp.data) )
            .catch( error => console.error(error) )
        },
        addContactAction: (action, value) => {                  // value => contact 항목 1개
            addContactAPI(value)
            .then( (resp) => console.log(resp.data) )
            .catch( error => console.error(error) )
        },
        updateContactAction: (action, value) => {                  // value => contact
            updateContactAPI(value)
            .then( (resp) => console.log(resp.data) )
            .catch( error => console.error(error) )
        },
        deleteContactAction: (action, value) => {                  // value => id
            deleteContactAPI(value)
            .then( (resp) => console.log(resp.data) )
            .catch( error => console.error(error) )
        },
        changeContactAction: (action, value) => {
            action.commit(CONTACT_CHANGECONTACT, value)
        }
    },
    getters: {
        getContactList: state => state.contactList,
        getContact: state => state.contact
    }
};
export default contact;
