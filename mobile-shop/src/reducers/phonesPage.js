import * as R from "ramda";

import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    SEARCH_PHONE
} from "../actions/actionTypes";

const initialState = {
    ids: [],
    search: "",
    phonesCount: 5
};

const phonesPage = (state = initialState, {type, payload, morePhonesCount}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck("id", payload)
            });
        case LOAD_MORE_PHONES_SUCCESS:
            return R.merge(state, {
                phonesCount: state.phonesCount + morePhonesCount
            });
        case SEARCH_PHONE:
            return R.merge(state, {
                search: payload,
                phonesCount: initialState.phonesCount
            });
        case FETCH_CATEGORIES_SUCCESS:
            return R.merge(state, {
                search: initialState.search,
                phonesCount: initialState.phonesCount
            });
        default:
            return state
    }
};

export default phonesPage;