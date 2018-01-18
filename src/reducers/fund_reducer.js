/**
 * Created by fengxiaoli on 2017/12/15.
 */

import {
    FUND_SUBMISSION,
    USER_FUND_MY,
    START_FUND_GOOD,
    All_FUND_LIST,
    FUND_DETAIL,
    FUND_DETAIL_MESSAGE,
    FUND_DETAIL_CHANGE
} from '../actions/types';

const INITIAL_STATE = { all: null, data: [], myfund:[], error:null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FUND_SUBMISSION:
            return { ...state, all: action.payload.data.data };
        case USER_FUND_MY:
            return { ...state, myfund: action.payload.data, error:action.payload.data.message };
        case START_FUND_GOOD:
            return { ...state, all: action.payload.data.data };
        case All_FUND_LIST:
            return { ...state, data: action.payload.data };
        case FUND_DETAIL:
            return { ...state, all: action.payload.data.data };
        case FUND_DETAIL_MESSAGE:
            return { ...state, messageall: action.payload.data.data };
        case FUND_DETAIL_CHANGE:
            return { ...state, all: action.payload.data.data };
    }
    return state;
}