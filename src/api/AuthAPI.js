import axios from 'axios'
import { loginStart, loginSuccess, loginFailed } from '../features/Auth/AuthSlice'
import { AuthUrl } from './BaseUrl'
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(AuthUrl, user)
        dispatch(loginSuccess(res.data))
        navigate('/user')
    } catch (err) {
        dispatch(loginFailed(err.response.data))
    }
}