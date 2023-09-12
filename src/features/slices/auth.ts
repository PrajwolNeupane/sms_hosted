import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  _id: string | undefined;
  name: string | undefined;
  logo: string | undefined;
  email: string | undefined;
  image: string | undefined;
  phone: string | undefined;
  city: string | undefined;
  country: string | undefined;
  description: string | undefined;
  date: string | undefined;
  postalCode: string | undefined;
};

const initialState: InitialState = {
  _id: undefined,
  name: undefined,
  email: undefined,
  image: undefined,
  logo: undefined,
  phone: undefined,
  city: undefined,
  country: undefined,
  description: undefined,
  date: undefined,
  postalCode: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: InitialState, action) => {
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state._id = action.payload.data.id;
      state.image = action.payload.data.school_image;
      state.logo = action.payload.data.school_logo;
      state.phone = action.payload.data.contact;
      state.city = action.payload.data.city;
      state.country = action.payload.data.country;
      state.description = action.payload.data.description;
      state.date = action.payload.data.established;
      state.postalCode = action.payload.data.postal;
    },

    logOut: (state) => {
      state = initialState;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOut } = authSlice.actions;
