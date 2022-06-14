import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../features/Auth/redux/reducer";

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer