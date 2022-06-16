import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {reducer as AuthReducer} from "../features/Auth/redux/reducer"

const rootReducer = combineReducers({
    auth: AuthReducer
})

export default rootReducer