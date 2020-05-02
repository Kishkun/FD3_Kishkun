import * as R from "ramda";

import {
    ADD_PHONE_TO_BASKET
} from "./../actions/actionTypes"

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PHONE_TO_BASKET:
            // полученый id, запушим в массив(payload-новый элемент)
            return R.append(payload, state);
        default:
            return state
    }
}