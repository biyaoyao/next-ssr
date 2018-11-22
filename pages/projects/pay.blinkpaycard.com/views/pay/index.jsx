import React, { Component } from 'react';
import { Form, message, Button, Input, Icon } from 'antd';
import CSSModules from 'react-css-modules';
import less from './less/index.less';
import mixinsAll from '../../../../common/mixins/index';
import mixins from '../../common/mixins/index';
const FormItem = Form.Item;
class Login extends Component {
	/**
     * 构造器
     * @param props
     */
	constructor(props) {
		super(props);
		this.state = {
			tips: '',
			editPasswordVisible: false,
			data: {}
		};
	}

	componentDidMount() {
		//preOrder
		this.preOrder();
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div
				onKeyPress={(e) => {
					if (e.which === 13) {
						this.loginAtion();
					}
				}}
				
				styleName="loginApp"
				className="flex flex-column flex-center">
				<div styleName="logoBox">
					<div styleName="logo " className="flex  flex-center">
						<img src={require('./images/logo.png')} />
						<img styleName="logo-text" src={require('./images/logo-text.png')} />
					</div>
				</div>
				<div styleName="intruduction">Order transaction is successful, please pay as soon as possible!</div>
				<div styleName="loginBox">
					<div styleName="loginItem title" className="flex  flex-center">
						{this.props.$t('login').title}
					</div>

					<div styleName="loginItem tips" className="flex  flex-center">
						{this.state.tips}
					</div>
					<Form>
						<div styleName="loginItem input-box">
							<FormItem label="" labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}>
								{getFieldDecorator('card_number', {
									rules: [ { required: true, message: this.props.$t('login').emptyUserName } ]
								})(<Input placeholder={this.props.$t('login').placeholderUserName} size="large" />)}
							</FormItem>
						</div>
						<div styleName="loginItem input-box">
							<FormItem label="" labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}>
								{getFieldDecorator('password', {
									rules: [ { required: true, message: this.props.$t('login').emptyPassword } ]
								})(
									<Input
										placeholder={this.props.$t('login').placeholderPassword}
										type="password"
										size="large"
									/>
								)}
							</FormItem>
						</div>
						<div styleName="loginItem input-box">
							<FormItem label="" labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}>
								{getFieldDecorator('cvv', {
									rules: [ { required: true, message: this.props.$t('login').emptyCvv} ]
								})(<Input placeholder={this.props.$t('login').placeholderCvv} size="large" />)}
							</FormItem>
						</div>
					</Form>
					<div styleName="loginItem link-box" className="flex  flex-center" />
					<div styleName="loginItem submit">
						<Button
							size={'large'}
							block
							type="primary"
							onClick={this.loginAtion.bind(this)}
							className="flex  flex-center"
						>
							{this.props.$t('login').submit}
						</Button>
					</div>
				</div>
				<div styleName="logoBox" className="flex-1" />
			</div>
		);
	}
	/**
	 * 预下单
	 */
	preOrder() {
		// this.props.ajax({
		// 	api: this.props.api.preOrder,
		// 	data: {
		// 		mch_id: 'blZwqA4CMb1',
		// 		app_id: 'app03LBH96y1',
		// 		osu_number: '1539330943083',
		// 		sign_type: 'md5',
		// 		sign: '9EFA381B03281D4F957C1537C02AADF0'
		// 	}
		// });
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
		const query = this.props.router.location.query;
		const _self = this;
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				values.mch_id=query.mch_id;
				values.pre_order=query.pre_order;
				const res = await _self.props.ajax({
					api: _self.props.api.Login,
					data: values
				});
				console.log(res);
				
				//
				if (parseInt(res.code) !== 200) {
					this.setState({
						tips: res.msg
					});
				} else {
					message.success(this.props.$t('login').success);
					query.value = res.result.value;
					query.redirect_url =res.result.redirect_url;
					query.currency =res.result.currency;
					this.props.router.push({
						pathname:'/success',
						query:query
					});
					
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
export default Form.create()(App);
