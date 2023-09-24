import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactState, IContact } from "../interface/interface";

const initialState: ContactState = {
  list: [],
 
};

export const contactReducer = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<IContact[]>) => {
      return {
        ...state,
        list: action.payload,
      };
    },
    addContact: (state, action: PayloadAction<IContact>) => {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    },
    updateContact: (state, action: PayloadAction<IContact>) => {
      return {
        ...state,
        list: state.list.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, ...action.payload }
            : contact
        ),
      };
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        list: state.list.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { setContact, addContact, updateContact, deleteContact } =
  contactReducer.actions;
