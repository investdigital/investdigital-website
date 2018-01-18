/**
 * Created by fengxiaoli on 2017/12/12.
 */



export const ROOT_URLCF = 'http://39.106.248.162:8080';
export const ROOT_STRATEGY = 'http://39.106.248.162:8080';
// export const ROOT_URLCF = 'http://192.168.1.129:8080';
// export const ROOT_STRATEGY = 'http://192.168.1.129:8080';

export const ROOT_AVATAR = 'https://cdn.ricequant.com/img/avatar';


export const AUTH_USER = 'auth_user';                               //登录
export const UNAUTH_USER = 'unauth_user';                           //退出登录
export const AUTH_ERROR = 'auth_error';                             //登录失败
export const REQUEST_ERROR = 'request_error';                       //http请求返回错误
export const EMAIL_SIGNUP_USER = 'email_signup_user';                //邮箱注册
export const FETCH_VERIFY_CODE = 'fetch_verify_code';                //验证码
export const FUND_SUBMISSION = 'fund_submission';                    //发行基金
export const USER_FUND_MY = 'user_fund_my';                          //我的基金
export const START_FUND_GOOD = 'start_fund_good';                      //明星基金产品
export const All_FUND_LIST = 'all_fund_list';                         //基金排行榜全部基金
export const FUND_DETAIL = 'fund_detail';                             //基金详情
export const FUND_DETAIL_MESSAGE = 'fund_detail_message';              //基金详情留言板
export const FUND_DETAIL_CHANGE = 'fund_detail_change';                //基金详情基金走势图



export const FETCH_USER_STRATEGY = 'fetch_user_strategy';          //获取我的策略
export const FETCH_GREAT_STRATEGY = 'fetch_great_strategy';       //获取精英策略
export const FETCH_ALL_STRATEGY = 'fetch_all_strategy';          //获取所有策略
export const FETCH_STRATEGY_INFO ='fetch_strategy_info';         //获取策略详情
export const FETCH_EARNINGS_DAY = 'fetch_earnings_day';          //获取日收益
export const FETCH_EARNINGS_WEEKLY = 'fetch_earnings_weekly';     //获取周收益
export const FETCH_EARNINGS_MONTHLY = 'fetch_earnings_monthly';   //获取月收益
export const FETCH_RUN_CHART = 'fetch_run_chart';              //获取策略收益图
export const FETCH_USER_POSITION = 'fetch_user_position';      //获取用户持仓
export const FETCH_USER_TRANSACTION = 'fetch_user_transation';  //获取用户交易
export const FETCH_STRATEGY_FACTORS = 'fetch_strategy_factors';    //获取策略风格分析
export const FETCH_STRATEGY_PLATE = 'fetch_strategy_plate';     //获取策略板块分析
export const FETCH_STRATEGY_BRINSION = 'fetch_strategy_brinsion';  //获取策略brinsion分析
export const FETCH_STRATEGY_COMMENT = 'fetch_strategy_comment';  //获取策略评论



export function getAuthorizedHeader() {
    return { authorization: localStorage.getItem('token') };
}

export function requestError(error) {
    return {
        type: REQUEST_ERROR,
        payload: error
    };
}
