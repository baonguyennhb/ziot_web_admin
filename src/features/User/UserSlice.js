import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        getAllUser: (state, action) => {
            state.users = action.payload
        }
    }
})
export const { getAllUser } = userSlice.actions
export default userSlice.reducer