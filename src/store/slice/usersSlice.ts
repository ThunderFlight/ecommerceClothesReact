import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
// interface users {

// }

export interface Test {
  email: string,
  password: string
}

const initialState: object[] = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registration(state, action:PayloadAction<object[]>) {
      state.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state));
    },
    logInCheckData(state, action:PayloadAction<Test>) {
      return JSON.parse(<string>localStorage.getItem('user')).map((item:Test) => item.email === action.payload.email && action.payload);
    }
  },
});
export const { registration,logInCheckData } = userSlice.actions;
export default userSlice.reducer;
