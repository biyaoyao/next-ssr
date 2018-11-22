import { Modal, Button } from 'antd';
const warning = Modal.warning;
import { $locate } from '../../../store';
let warn = null;

export default (response, resolve, errorCallBack) => {
	if (parseInt(response.code) === 200) {
		resolve(response);
	} else if (parseInt(response.code) === 403) {
		// 登陆认证失败
		const loginMsg = $locate.getState().locate.localMesaage['login'];
		if (!warn) {
			warn = warning({
				title: loginMsg.sessionExpired,
				content: '',
				onOk() {
					location.href='/#login';
					warn = null;
				}
			});
		}
	} else {
		errorCallBack(response.msg);
	}
};
