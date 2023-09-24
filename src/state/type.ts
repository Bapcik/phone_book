import { AnyAction } from "@reduxjs/toolkit";
import { IContact } from "../interface/interface";

export const ContactsActionTypes = {
  SET_CONTACTS: "SET_CONTACTS",
  ADD_CONTACT: "ADD_CONTACT",
  UPDATE_CONTACT_SUCCESS: "UPDATE_CONTACT_SUCCESS",
  DELETE_CONTACT_SUCCESS: "DELETE_CONTACT_SUCCESS",
};

export const setContactsSuccess = (contacts: IContact[]): AnyAction => ({
  type: ContactsActionTypes.SET_CONTACTS,
  payload: contacts,
});

export const addContactSuccess = (contact: IContact): AnyAction => ({
  type: ContactsActionTypes.ADD_CONTACT,
  payload: contact,
});

export const updateContactSuccess = (updated: IContact): AnyAction => ({
  type: ContactsActionTypes.UPDATE_CONTACT_SUCCESS,
  payload: updated,
});

export const deleteContactSuccess = (contactId: string): AnyAction => ({
  type: ContactsActionTypes.DELETE_CONTACT_SUCCESS,
  payload: contactId,
});
