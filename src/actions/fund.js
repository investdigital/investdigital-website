/**
 * Created by fengxiaoli on 2017/12/16.
 */
import axios from 'axios';
import { browserHistory, hashHistory } from 'react-router';
import {
    ROOT_URLCF,
    FUND_SUBMISSION,
    USER_FUND_MY,
    START_FUND_GOOD,
    All_FUND_LIST,
    FUND_DETAIL,
    FUND_DETAIL_MESSAGE,
    FUND_DETAIL_CHANGE,
    getAuthorizedHeader,
    requestError
} from './types';


/**
 * 基金发行
 */
export function fetchFundSubmission({formdata}, callback) {
    console.log(formdata);
    return function (dispatch) {
        // axios.post(`${ROOT_URLCF}/fund/issue`, {formDate}, { headers: getAuthorizedHeader() } )
        axios({
            method: 'post',
            url: `${ROOT_URLCF}/fund/issue `,
            data: formdata,
            headers: getAuthorizedHeader()
        }).then(response => {
            // console.log('基金发行');
            //     console.log(response);
                if (response.data.status == 1) {
                    callback();
                } else {
                    callback(response.data.message);
                }
                dispatch({ type: FUND_SUBMISSION, payload: response });
            })
            .catch(err => dispatch(requestError(err.message)));
    };
}


/**
 * 我的基金
 */
export function fetchFundMy({userId, pageNum, pageSize}, callback) {
    // console.log();
    return function (dispatch) {
        axios.get(`${ROOT_URLCF}/fund/myFunds?userId=${userId}&pageNum=${pageNum}&pageSize=${pageSize}`, { headers: getAuthorizedHeader() } )
       .then(response => {
           console.log('我的基金');
           console.log(response);
            dispatch({ type: USER_FUND_MY, payload: response });
        })
            .catch(err => dispatch(requestError(err.message)));
    };
}


/**
 * 明星基金产品
 */
export function fetchStartFund(callback) {
    // console.log();
    return function (dispatch) {
        axios.get(`${ROOT_URLCF}/fund/starFunds`, { headers: getAuthorizedHeader() } )
            .then(response => {
                console.log('明星基金产品');
                console.log(response);
                dispatch({ type: START_FUND_GOOD, payload: response });
            })
            .catch(err => dispatch(requestError(err.message)));
    };
}

/**
 * 基金排行榜全部基金
 */
export function fetchAllFund({ pageNum, pageSize}, callback) {
    console.log(`${pageNum}, ${pageSize}`);
    return function (dispatch) {
        axios.get(`${ROOT_URLCF}/fund/allFunds?pageNum=${pageNum}&pageSize=${pageSize}`, { headers: getAuthorizedHeader() } )
            .then(response => {
                console.log('全部基金');
                console.log(response);
                dispatch({ type: All_FUND_LIST, payload: response });
            })
            .catch(err => dispatch(requestError(err.message)));
    };
}


/**
 * 基金详情
 */
export function fetchFundDetail({fundId}, callback) {
    // console.log();
    return function (dispatch) {
        axios.get(`${ROOT_URLCF}/fund/fundInfo?fundId=${fundId}`, { headers: getAuthorizedHeader() } )
            .then(response => {
                console.log('基金详情');
                console.log(response);
                dispatch({ type: FUND_DETAIL, payload: response });
            })
            .catch(err => dispatch(requestError(err.message)));
    };
}


/**
 * 基金详情留言板
 */
export function fetchFundComment({ fundId, pageNum, pageSize}) {
    // console.log();
    return function (dispatch) {
        axios.get(`${ROOT_URLCF}/fund/comment?fundId=${fundId}&pageNum=${pageNum}&pageSize=${pageSize}`, { headers: getAuthorizedHeader() } )
            .then(response => {
                console.log('基金详情留言板');
                console.log(response);
                dispatch({ type: FUND_DETAIL_MESSAGE, payload: response });
            })
            .catch(err => dispatch(requestError(err.message)));
    };
}
/**
 * 基金详情走势
 */
export function fetchFundDetailChange({fundId}, callback) {
    // console.log();
    return function (dispatch) {
        axios.get(`${ROOT_URLCF}/fund/fundInfo?fundId=${fundId}`, { headers: getAuthorizedHeader() } )
            .then(response => {
                console.log('基金详情基金走势');
                console.log(response);
                dispatch({ type: FUND_DETAIL_CHANGE, payload: response });
            })
            .catch(err => dispatch(requestError(err.message)));
    };
}