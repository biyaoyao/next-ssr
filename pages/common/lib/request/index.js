/**
 * Created by BIYY on 2017-11-17.
 */
import { message } from 'antd';
import axios from 'axios';
import config from '../../../config/index';
import loading from '../../../common/lib/loading';
let request = {};
/**
 * ajax请求失败
 * @param msg
 */
request.ajaxError = (msg, timeOut) => {
    console.log('ajaxError', msg);
    if (msg) {
        setTimeout(() => {
            message.error(JSON.stringify(msg));
        }, 20);
    } else {
        message.error('网络出错!');
    }
    loading.hide();
    clearTimeout(timeOut);
};
/**
 * ajax
 * @param opt
 */
request.ajax = (opt) => {

    let option = {};
    let setTime = {};
    let time = new Date() * 1;
    let showLoading = true; //是否出現loading
    let loadingTime = config.loadingTime || 500; //出现loading时间
    let method = opt.api.method || config.requestType.get;
    let url = opt.api.url;
    let headers = opt.headers || opt.api.headers || {};
    if (!url) {
        request.ajaxError('请填写接口地址', setTime[time]);
        return false;
    }
    if (opt.api && opt.api.loadingTime) {
        loadingTime = opt.api.loadingTime;
    }

    if (opt.api && !opt.api.showLoading) {
        showLoading = false;
    }

    setTime[time] = setTimeout(() => { // 超过一定時間后出现加载条
        if (showLoading) {
            loading.show();
        }
    }, loadingTime);
    option.headers = headers;
    option.method = method;
    option.url = url;
    if (opt.api && opt.api.inject) { //自定义注入器
        option = opt.api.inject(option);
    }
    if (method === config.requestType.get) { //get请求
        if (opt.data) {
            option.params = opt.data;
        }
    } else { //post请求
        if (opt.data) {
            option.data = opt.data;
        }
        option.params = opt.params || {};

    }
    return new Promise((resolve, reject) => {
        axios(option)
            .then((response) => {
                request.render(response, opt, setTime, time, resolve);
                loading.hide();
            }).catch((error) => {
                console.log(error.response);
                let response = error.response;
                request.render(response, opt, setTime, time, resolve);
                loading.hide();
            });
    });
};
request.render = (response, opt, setTime, time, resolve) => {

    if (response) {
        if (opt.api && opt.api.intercept) { //自定义状态码拦截器
            opt.api.intercept(response.data, resolve, (msg) => {
                request.ajaxError(msg, setTime[time]);
            });
        } else if (response.status === 503) {
            request.ajaxError(response.statusText, setTime[time]);
        } else {
            resolve(response.data);
        }
    } else {
        request.ajaxError('网络出错', setTime[time]);
    }
}
export default request;