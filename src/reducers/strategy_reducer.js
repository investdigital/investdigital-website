
/**
 * Created by zhangxiaojing on 2017/12/15.
 */

import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_GREAT_STRATEGY,
    FETCH_USER_STRATEGY,
    FETCH_ALL_STRATEGY,
    FETCH_STRATEGY_INFO,
    FETCH_RUN_CHART,
    FETCH_USER_POSITION,
    FETCH_USER_TRANSACTION,
    FETCH_STRATEGY_FACTORS,
    FETCH_STRATEGY_PLATE,
    FETCH_STRATEGY_BRINSION,
    FETCH_STRATEGY_COMMENT,
    FETCH_EARNINGS_DAY,
    FETCH_EARNINGS_WEEKLY,
    FETCH_EARNINGS_MONTHLY
} from '../actions/types';

const INITIAL_STATE = { strategy_great: null, strategy_user:null, strategy_all:null, strategy_info:null, run_chart:null, user_position:null, user_transaction:null, strategy_factors:null, strategy_plate:null, strategy_brinsion:null, strategy_comment:null, earnings_day:null, earnings_weekly:null, earnings_monthly:null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_GREAT_STRATEGY:
            return { ...state, strategy_great: action.payload };
        case FETCH_USER_STRATEGY:
            return { ...state, strategy_user: action.payload };
        case FETCH_ALL_STRATEGY:
            return { ...state, strategy_all: action.payload };
        case FETCH_STRATEGY_INFO:
            return { ...state, strategy_info: action.payload };
        case FETCH_EARNINGS_DAY:
            return { ...state, earnings_day: action.payload };
        case FETCH_EARNINGS_WEEKLY:
            return { ...state, earnings_weekly: action.payload };
        case FETCH_EARNINGS_MONTHLY:
            return { ...state, earnings_monthly: action.payload };
        case FETCH_RUN_CHART:
            return { ...state, run_chart: action.payload };
        case FETCH_USER_POSITION:
            return { ...state, user_position: action.payload };
        case FETCH_USER_TRANSACTION:
            return { ...state, user_transaction: action.payload };
        case FETCH_STRATEGY_FACTORS:
            return { ...state, strategy_factors: action.payload };
        case FETCH_STRATEGY_PLATE:
            return { ...state, strategy_plate: action.payload };
        case FETCH_STRATEGY_BRINSION:
            return { ...state, strategy_brinsion: action.payload };
        case FETCH_STRATEGY_COMMENT:
            return { ...state, strategy_comment: action.payload };
    }
    return state;
}