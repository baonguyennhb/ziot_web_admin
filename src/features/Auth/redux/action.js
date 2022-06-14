import * as types from './constants'
import axios from 'axios'
const loginStart = () => ({
    type: types.LOGIN_START,
})

const loginSuccess = (token) => ({
    type: types.LOGIN_SUCCESS,
    payload: token
})

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error
})

export const loginInitiate = (email, password) => {
    return function(dispatch) {
        dispatch(loginStart())
        axios
            .post("http://localhost:5001/admin/user/login", {
                email,
                password
            })
            .then((response) => {
                console.log("response ", response)
                dispatch(loginSuccess(response.data.token))
            })
            .catch((error) => dispatch(loginFail(error.response.data.message)))
    }
}

