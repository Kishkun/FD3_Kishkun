import * as R from "ramda";

import {
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    SEARCH_PHONE,
    TOGGLE_IS_FETCHING
} from "../actions/actionTypes";

const initialState = {
    ids: [],
    search: '',
    isFetching: false
};

const phonesPage = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            return R.merge(state, {
               ids: R.pluck("id", payload)
            });
        case LOAD_MORE_PHONES_SUCCESS:
            const ids = R.pluck("id", payload);
            return R.merge(state, {
                ids: R.concat(state.ids, ids)
            });
        case SEARCH_PHONE:
            return R.merge(state, {
                search: payload
            });
        case TOGGLE_IS_FETCHING:
            return R.merge(state, {
                isFetching: payload
            });
        default:
            return state
    }
};

export default phonesPage;