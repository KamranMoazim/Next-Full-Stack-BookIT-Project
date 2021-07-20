import axios from "axios";
import absoluteUrl from "next-absolute-url";

import { 
    ALL_ROOM_SUCCESS, 
    ALL_ROOM_FAIL,
    CLEAR_ERRORS
} from "../constants/roomConstants";

export const getRooms = (req) => async (disptach) => {
    console.log(req)
    try {
        
        const { origin } = absoluteUrl(req);
        // console.log(origin)
        const { data } = await axios.get(`${origin}/api/rooms`);
        // console.log(data)
        disptach({
            type: ALL_ROOM_SUCCESS,
            payload: data
        })

    } catch (error) {

        disptach({
            type: ALL_ROOM_FAIL,
            payload: error.response.data.message
        })

    }
}


export const clearErrors = () => async(disptach) => {
    disptach({
        type: CLEAR_ERRORS
    })
}