import React, { Component } from 'react';
import { Icon, message } from 'antd';
import CSSModules from 'react-css-modules';
import less from './less/index.less';
import mixinsAll from '../../../../common/mixins/index';
import mixins from '../../common/mixins/index';
class Login extends Component {
	/**
     * 构造器
     * @param props
     */
	constructor(props) {
		super(props);
		this.state = {
			seconds: 10
		};
	}
	componentDidMount() {
		
		this.preOrder();
	}
	render() {
		return (
			<div
				onKeyPress={(e) => {
					if (e.which === 13) {
						this.loginAtion();
					}
				}}
				styleName="loginApp"
				className="flex flex-column flex-center"
			>
				<div styleName="logoBox">
					<div styleName="logo " className="flex  flex-center">
						<img src={require('./images/logo.png')} />
						<img styleName="logo-text" src={require('./images/logo-text.png')} />
					</div>
				</div>
				<div styleName="intruduction" />

				<div className="flex flex-column flex-center" styleName="loginBox">
					<div styleName="item" />
					<div styleName="center" className="flex flex-column">
						<div className="flex-1 flex flex-center">
							<Icon type="exclamation-circle" theme="outlined" />
							illegal parameter
						</div>
					</div>

					<div styleName="item">
						<a styleName="link" onClick={this.goBack.bind(this)}>
							Back >>
						</a>
					</div>
				</div>
				<div className="flex-1" />
			</div>
		);
	}
	/**
	 * 预下单
	 */
	preOrder() {
		this.props.ajax({
			api: this.props.api.preOrder,
			data: {
				mch_id: 'blZwqA4CMb1',
				app_id: 'app03LBH96y1',
				osu_number: '15393309430831477',
				sign_type: 'md5',
				sign: '21ABAA9EFF85E5F92ED032A9A32B9419'
			}
		});
	}
	/**
     * 用户名输入
     * @param e
     */
	onChangeUserName(e) {
		this.setState({
			login: {
				userName: e.target.value,
				password: this.state.login.password
			}
		});
	}
	goBack() {
		console.log('goBack');
		this.props.router.goBack();
	}
	/**
     * 密码输入
     * @param e
     */
	onChangePassword(e) {
		this.setState({
			login: {
				userName: this.state.login.userName,
				password: e.target.value
			}
		});
	}

	/**
     * 删除输入框
     * @param item
     */
	clear(item) {
		console.log('clear', item);
		this.setState({
			login: {
				userName: item === 'userName' ? '' : this.state.login.userName,
				password: item === 'password' ? '' : this.state.login.password
			}
		});
	}

	/**
     * 登录操作
     */
	async loginAtion() {
		const { setCookie, getCookie, delCookie } = this.props.Cookie;
		const _self = this;
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				const res = await _self.props.ajax({
					api: _self.props.api.Login,
					data: values
				});
				console.log(res);
				if (parseInt(res.code) !== 200) {
					this.setState({
						tips: res.msg
					});
				} else {
					message.success(this.props.$t('login').success);
					//localStorage.setItem('token', res.result.token);
					setCookie('pay_admin_token', res.result.token, 60 * 60 * 7);
					this.props.router.push(`/consum`);
				}
			}
		});
	}
}

const App = mixinsAll(mixins(
	CSSModules(Login, less, {
		allowMultiple: true
	})
));
export default App;
