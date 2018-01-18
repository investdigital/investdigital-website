/**
 * Created by zhangxiaojing on 2017/12/15.
 */
import axios from 'axios';
import { browserHistory, hashHistory } from 'react-router';
import {
    ROOT_STRATEGY,
    FETCH_USER_STRATEGY,
    FETCH_GREAT_STRATEGY,
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
    FETCH_EARNINGS_MONTHLY,
    getAuthorizedHeader,
    requestError
} from './types';

/**
 * 获取精英策略
 */
export function fetchGreatStrategy() {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getGreatStrategy/0/0`)
            .then(response => {
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_GREAT_STRATEGY, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取我的策略
 */
export function fetchUserStrategy({ pageSize, pageNum, desc, userId}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getUserStrategy/${pageSize}/${pageNum}/${desc}/${userId}`)
            .then(response => {
                // console.log('我的策略');
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_USER_STRATEGY, payload: response.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取所有策略
 */

export function fetchAllStrategy({pageSize, pageNum, desc}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getAllStrategy/${pageSize}/${pageNum}/${desc}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_ALL_STRATEGY, payload: response.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取策略详情
 */
export function fetchStrategyInfo({strategyId}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/catStrategyInfo/${strategyId}`)
            .then(response => {
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_STRATEGY_INFO, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}



/**
 * 获取日收益
 */
export function fetchEarningDay({desc}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getStrategyTrunk/${desc}`)
            .then(response => {
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_EARNINGS_DAY, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取周收益
 */
export function fetchEarningWeekly({desc}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getStrategyTrunk/${desc}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_EARNINGS_WEEKLY, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}


/**
 * 获取月收益
 */
export function fetchEarningMonthly({desc}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getStrategyTrunk/${desc}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_EARNINGS_MONTHLY, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}


/**
 * 获取收益图
 */
export function fetchRunChart({strategyId, beginTime, endTime}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getRunChart/${strategyId}/${beginTime}/${endTime}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_RUN_CHART, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}


/**
 * 获取用户持仓
 */
export function fetchUserPosition({strategyId}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getUserPosition/${strategyId}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_USER_POSITION, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取用户交易
 */
export function fetchUserTransaction({strategyId}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getUserTransaction/${strategyId}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_USER_TRANSACTION, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取策略风格分析
 */
export function fetchStrategyFactors({strategyId, beginTime, endTime}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getStrategyFactors/${strategyId}/${beginTime}/${endTime}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_STRATEGY_FACTORS, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取策略板块分析
 */
export function fetchStrategyPlate({strategyId}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getStrategyPlate/${strategyId}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_STRATEGY_PLATE, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取策略brinsion分析
 */
export function fetchStrategyBrinsion({strategyId}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getStrategyBrinsion/${strategyId}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_STRATEGY_BRINSION, payload: response.data.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 获取策略评论
 */
export function fetchStrategyComment({strategyId, pageSize, pageNum}) {
    return function (dispatch) {
        axios.post(`${ROOT_STRATEGY}/strategy/getStrategyComment/${strategyId}/${pageSize}/${pageNum}`)
            .then(response => {
                // console.log(response);
                if (response.data.status == 1) {
                    dispatch({ type: FETCH_STRATEGY_COMMENT, payload: response.data});
                }
            }).catch(err => dispatch(requestError(err.message)));
    };
}


