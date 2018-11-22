import Cookie from '../../../../../common/lib/cookie/index';
export default (option) => {
    const { getCookie } = Cookie;
    option.headers = option.headers || {};
    option.headers.reseller_admin_token = getCookie('reseller_admin_token');
    return option;
}