/**
 * Created by BIYY on 2018-6-25.
 */

import config from '../../config/index';
console.log('config', config);
let api = {};
api.requestType = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete',
    jsonp: 'jsonp'
};
let baseUrl = 'http://pay.blinkpaycard.com';
// 预下单
api.preOrder = {
    url: `${baseUrl}/pay/preOrder`,
    method: api.requestType.post
};
// 校验订单|
api.validPreOrder = {
    url: `${baseUrl}/pay/validPreOrder`,
    method: api.requestType.post
};
// 登陆
api.Login = {
    url: `${baseUrl}/pay/pay`,
    method: api.requestType.post
};

export default api;