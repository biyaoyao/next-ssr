/**
 * Created by BIYY on 2017-10-12.
 */

let config = {};
config.requestType = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete',
    jsonp: 'jsonp'
};

config.locateList = [{
    label: 'English(US)',
    value: 'en_US',
    require: require(`antd/lib/locale-provider/en_US`)
},
{
    label: '中文',
    value: 'zh_CN',
    require: require(`antd/lib/locale-provider/zh_CN`)
}
];
config.locate = 'en_US'; // 状态栏颜色 'CN,EN'
export default config;