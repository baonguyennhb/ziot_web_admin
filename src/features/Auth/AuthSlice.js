import { createSlice }  from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: null
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFailed: (state, action) => {
            state.login.error = action.payload
        },
       
    }
})
export const { loginStart, loginSuccess, loginFailed } = authSlice.actions 
export default authSlice.reducer