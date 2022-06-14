import * as types from './constants'
import axios from 'axios'

const base_URL = 'http://13.213.68.19:5001'
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
            .post(`${base_URL}/admin/user/login`, {
                email,
                password
            })
            .then((response) => {
                localStorage.setItem("token",(response.data.token))
                dispatch(loginSuccess(response.data.token))
            })
            .catch((error) => dispatch(loginFail(error.response.data.message)))
    }
}

