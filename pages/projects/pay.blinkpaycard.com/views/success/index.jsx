import React, { Component } from 'react';
import { Icon, message } from 'antd';
import CSSModules from 'react-css-modules';
import less from './less/index.less';
import mixinsAll from '../../../../common/mixins/index';
import mixins from '../../common/mixins/index';
class Success extends Component {
	/**
     * 构造器
     * @param props
     */
	constructor(props) {
		super(props);
		this.state = {
			seconds: 10,
			query: {}
		};
	}
	componentDidMount() {
		console.log('router', this.props.router.location.query);
		this.setState({
			query: this.props.router.location.query
		});
		let seconds = this.state.seconds;
		const interval = setInterval(() => {
			seconds--;
			this.setState({ seconds: seconds });
			if (seconds <= 0) {
				//跳转
				this.gotoPaymentSuccess();
				clearInterval(interval);
			}
		}, 1000);
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
					<div styleName="item">
						Congratulations，<a>${this.state.query.value / 100}</a> has been recharged successfully！
					</div>
					<div styleName="center" className="flex flex-column">
						<div styleName="center-top" />
						<div className="flex-1 flex flex-center">
							{this.state.query.currency} {this.state.query.value / 100}
						</div>
						<div styleName="center-bottom">
							<Icon type="check-circle" theme="outlined" />
						</div>
					</div>
					{this.state.query.redirect_url ? (
						<div styleName="item">
							<a>{this.state.seconds}s</a> left automatically to the payment success page
						</div>
					) : null}

					<div styleName="item">
						{this.state.query.redirect_url ? (
							<a styleName="link" onClick={this.gotoPaymentSuccess.bind(this)}>
								Jump to Payment Success >>
							</a>
						) : null}
					</div>
				</div>
				<div className="flex-1" />
			</div>
		);
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
	gotoPaymentSuccess() {
		console.log('gotoPaymentSuccess');
		if (this.state.query.redirect_url) {
			location.href = this.state.query.redirect_url;
		}
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
}

const App = mixinsAll(
	mixins(
		CSSModules(Success, less, {
			allowMultiple: true
		})
	)
);
export default App;
