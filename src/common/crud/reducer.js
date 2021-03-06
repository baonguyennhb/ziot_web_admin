import initialState from "./initialState";
import {RESPONSE_ACTION, RESET_ACTION, PENDING_ACTION} from "./constants";
import {LOCATION_CHANGE} from 'connected-react-router';
import {pushMessageError} from "../../layouts";
import _ from "lodash"

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case LOCATION_CHANGE:
        case RESET_ACTION:
            return {
                ...state,
                ...initialState,
                loading: false
            };
        case PENDING_ACTION:
            return {
                ...state,
                loading: true
            };
        case RESPONSE_ACTION:
            if (payload.status >= 400) {
                pushMessageError(payload.message);
            }

            return {
                ...state,
                data      : payload.data,
                code      : payload.code,
                message   : payload.message,
                errors    : _.isEmpty(payload.errors) ? [] : payload.errors,
                loading   : false,
                status    : payload.status,
                statusText: payload.status,
            };
        default:
            return state;
    }
}