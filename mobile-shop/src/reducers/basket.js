import * as R from "ramda";

import {
    ADD_PHONE_TO_BASKET,
    REMOVE_PHONE_FROM_BASKET,
    CLEAN_BASKET,
    CHECKOUT_BASKET
} from "./../actions/actionTypes"

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PHONE_TO_BASKET:
            // полученый id, запушим в массив(payload-новый элемент)
            return R.append(payload, state);
        case REMOVE_PHONE_FROM_BASKET:
            // without удаляем все id из массива на которые нажали
            // of превращаем в массив
            return R.without(R.of(payload), state);
        case CLEAN_BASKET:
            return initialState;
        case CHECKOUT_BASKET:
            alert(JSON.stringify(payload));
            return state;
        default:
            return state
    }
}