import { createSlice } from "@reduxjs/toolkit";

// interface users {
    
// }

const initialState:object[] = []


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        incremnted(state) {
            state
        }
    }
})

export const {incremnted} = userSlice.actions;
export default userSlice.reducer;