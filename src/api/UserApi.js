import axios from 'axios'
import { getAllUser } from '../features/User/UserSlice'
import { GetAllUserUrl } from './BaseUrl'
export const GetAllUser = async (dispatch) => {
    try {
        const res = await axios.get(GetAllUserUrl)
        dispatch(getAllUser(res.data))
    } catch (err) {
        console.log(err)
    }
}