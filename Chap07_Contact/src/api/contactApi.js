import axios from 'axios'

const BASE_URL = '/api/contacts/';
const PAGE_NO = 1;
const PAGE_SIZE = 10;

const CONTACT_GET_CONTACTLIST = BASE_URL;
const CONTACT_GET_CONTACT = BASE_URL + 'NO';
const CONTACT_ADD_CONTACT = BASE_URL;
const CONTACT_UPDATE_CONTACT = BASE_URL + 'NO';
const CONTACT_DELETE_CONTACT = BASE_URL + 'NO';
const CONTACT_UPDATE_PHOTO = BASE_URL + 'NO/photo';

const getContactListAction = (no, size) => {
  return axios.get( CONTACT_GET_CONTACTLIST, {params: {pageno: no || PAGE_NO, pagesize: size || PAGE_SIZE}} )
}

const getContactAction = (no) => {
  return axios.get( CONTACT_GET_CONTACT.replace('NO', no) );
}

const addContactAction = (data) => {
  return axios.post( CONTACT_ADD_CONTACT, data );
}

const updateContactAction = (data) => {
  return axios.put( CONTACT_UPDATE_CONTACT.replace('NO', data.no), data );
}

const deleteContactAction = (no) => {
  return axios.delete( CONTACT_DELETE_CONTACT.replace('NO', no) );
}

const updatePhotoAction = (no, file) => {
  const data = new FormData();
  data.append('photo', file)
  return axios.post( CONTACT_UPDATE_PHOTO.replace('NO', no), data );
}

export { getContactListAction, getContactAction, addContactAction, updateContactAction, deleteContactAction, updatePhotoAction }
