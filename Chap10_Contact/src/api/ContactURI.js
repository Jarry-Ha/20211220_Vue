
const BASE_URI = '/api';

const PAGE_SIZE = 5;

const GET_CONTACTLIST = BASE_URI + '/contacts';
const GET_CONTACT = BASE_URI + '/contacts/${no}';
const ADD_CONTACT = BASE_URI + '/contacts/';
const DELETE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_PHOTO = BASE_URI + '/contacts/${no}/photo';

export { PAGE_SIZE, GET_CONTACTLIST, GET_CONTACT, ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, UPDATE_PHOTO};
