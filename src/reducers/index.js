/**
 * Created by fengxiaoli on 2017/12/12.
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import strategyReducer from './strategy_reducer';
import fundReducer from './fund_reducer';


const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    strategy:strategyReducer,
    fund:fundReducer
});

export default rootReducer;