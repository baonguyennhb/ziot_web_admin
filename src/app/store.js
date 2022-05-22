import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/Auth/AuthSlice'
import userReducer from '../features/User/UserSlice'
export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer
    },
})