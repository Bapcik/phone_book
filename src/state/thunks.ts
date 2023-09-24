import { Dispatch } from "redux";
import { axiosOrders } from "../axios-orders";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IContact } from "../interface/interface";
import {
  addContact,
  deleteContact,
  setContact,
  updateContact,
} from "./actions";

export const fetchContactUrl = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axiosOrders.get("/contact.json");
      const data: { [key: string]: IContact } = response.data;
      const contacts: IContact[] = Object.values(data);
      dispatch(setContact(contacts));
    } catch (error) {
      console.error("Error", error);
    }
  };
};

export const addContactUrl = (contact: IContact) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axiosOrders.post("/contact.json", contact);
      const newContact = { ...contact, id: response.data.name };
      dispatch(addContact(newContact));
    } catch (error) {
      console.error("Error adding:", error);
    }
  };
};

export const updateContactUrl =
  (
    contact: IContact
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await axiosOrders.put(
        `contact/${contact.id}.json`,
        contact
      );
      const updatedContact: IContact = response.data;
      dispatch(updateContact(updatedContact));
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

export const deleteContactUrl =
  (
    contactId: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      await axiosOrders.delete(`contact/${contactId}.json`);
      dispatch(deleteContact(contactId));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };
