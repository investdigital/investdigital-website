/**
 * Created by fengxiaoli on 2017/12/12.
 */

import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_VERIFY_CODE,
    EMAIL_SIGNUP_USER,
} from '../actions/types';

const INITIAL_STATE = { all: null, array: [], data: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload, authenticated: false };
        case FETCH_VERIFY_CODE:
            return { ...state, all: action.payload.data.data };
    }

    return state;
}