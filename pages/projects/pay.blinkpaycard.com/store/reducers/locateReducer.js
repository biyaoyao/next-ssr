/**
 * Created by BIYY on 2018-6-26.
 */
import actions from '../actions/index';
import { createStore } from 'redux';
const reducer = (state = {}, action) => {
    state = getState(state, action);
    if (state.callback) {
        state.callback();
    }
    return state;
};
const getState = (state, action) => {
    state = actions.locate(state, action);
    return state;
};
export default createStore(reducer);