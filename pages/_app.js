import App, { Container } from 'next/app';
import router from 'next/router';
import 'antd/dist/antd.min.css';
import './assets/css/index.less';
import http from './common/lib/request/index';
import config from './config/index';
import React from 'react';
import IndexLoading from './components/index-loading/index';
export default class MyApp extends App {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			router: {},
			time: 10
		};
	}
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}
	async validPreOrder(params) {
		console.log('validPreOrder', params);
		const res = await http.ajax({
			api: config.api.validPreOrder,
			data: {
				pre_order: params.pre_order,
				mch_id: params.mch_id
			}
		});
		return new Promise((resolve) => {
			if (parseInt(res.code) === 200) {
				resolve(0);
			} else if (parseInt(res.code) === 40015) {
				resolve(1);
			} else {
				resolve(-1);
			}
		});
	}
	async componentDidMount() {
		console.log('componentDidMount', router.router.asPath);
		const pathname = router.router.pathname;
		const asPath = router.router.asPath;
		const project = pathname.replace('/projects/', '').replace('/views' + asPath, '');
		console.error('project', project);
		//let valid = await this.validPreOrder(router.router.query);
		this.setState({
			show: true,
			project:project
		});
		// let time = setInterval(() => {
		// 	console.log('componentDidMount',this.state.time);
		// 	if (this.state.time <= 0) {
		// 		this.setState({
		// 			show: true
		// 		});
		// 		clearInterval(time);
		// 	} else {
		// 		this.setState({
		// 			time: this.state.time-1
		// 		});
		// 	}
		// }, 1000);
	}

	render() {
		//let valid = await this.validPreOrder(nextState.location.query);
		const { Component, pageProps } = this.props;
		
		if (this.state.project) {
			console.error('project', this.state.project);
			const  projectEntry = require('../pages/projects/pay.blinkpaycard.com/index');
			return <Container>{this.state.show ? <projectEntry {...pageProps} /> : <IndexLoading />}</Container>;
		}

		return null;
	}
}
