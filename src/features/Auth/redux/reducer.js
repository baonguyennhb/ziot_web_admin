import initialState from "./initialState";
import {
    SET_TOKEN_ACTION, CLEAR_TOKEN_ACTION, ARG_TOKEN, LOGIN_LOADING
} from "./constants";

export function reducer(state = initialState, action) {
    const stateLocal = loadStateFromLocal();
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state, login: {
                    ...state.login, loading: true
                }
            };
        case SET_TOKEN_ACTION:
        case CLEAR_TOKEN_ACTION:
            return {
                ...state, ...stateLocal, login: {
                    loading: false
                }
            };
        default:
            return {
                ...state, ...stateLocal,
            };
    }
}

export function loadStateFromLocal() {
    let stateFromLocal;
    try {
        // Load data from local
        let dataLocal = JSON.parse(localStorage.getItem(ARG_TOKEN));

        // Load data auth
        const {data, token} = dataLocal

        stateFromLocal = {
            user   : {
                id   : data._id,
                name : data.name,
                email: data.email,
            },
            meta: {
                token: token
            },
            role: data.role
        }

    } catch (e) {
        localStorage.removeItem(ARG_TOKEN)
        stateFromLocal = {
            user   : {
                ...initialState.user
            },
            meta: {
                ...initialState.meta
            },
            role: initialState.role
        }
    }
    return stateFromLocal;
}