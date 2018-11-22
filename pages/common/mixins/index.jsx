import React, { Component } from 'react';
import { $locate } from '../../store';
import url from '../../common/lib/url/index';
import localMesaage from '../../config/i18n/index';
import http from '../lib/request/index';
import { string, obj, date, file } from '../lib/index';
import Cookie from '../lib/cookie/index';
import config from '../../config/index';
import router from 'next/router';
//router.location = router.router;
export default (ComposedComponent) =>class  extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: null };
	}
	componentDidMount() {
		router.location = router.router;

		this.initLocate();
	}
	render() {
		router.location = router.router;
		return (
			<ComposedComponent
				{...this.props}
				Cookie={Cookie}
				plain={this.plain}
				router={router}
				objUtil={obj}
				data={this.state.data}
				formateNumber={this.formateNumber}
				dateFormat={date.formatDate}
				date={date}
				file={file}
				stringUtil={string}
				ajax={http.ajax}
			/>
		);
	}

	/**
     * 语言初始化
     */
	initLocate() {
		console.log('initLocate', config);
		let locate = null;

		config.locateList.forEach((item) => {
			if (config.locate === item.value) {
				locate = item;
			}
		});
		config.locateList.forEach((item) => {
			if (localStorage.getItem('locate') === item.value) {
				locate = item;
			}
		});
		config.locateList.forEach((item) => {
			if (url.getParam('locate') === item.value) {
				locate = item;
			}
		});

		$locate.subscribe(() => {
			console.error('subscribe', $locate.getState().locate);
			locate = $locate.getState().locate;
			locate.localMesaage = localMesaage[locate.value];
			if (locate && (!this.locate || this.locate !== locate)) {
				this.locate = locate;
				localStorage.setItem('locate', locate.value);
				this.setState({
					locate: locate
				});
			}
		});
		$locate.dispatch({
			type: 'locate',
			payload: locate,
			callback: () => {}
		});
	}
	$t(key) {
		if ($locate.getState().locate && $locate.getState().locate.localMesaage) {
			return $locate.getState().locate.localMesaage[key];
		} else {
			return localMesaage[config.locate][key];
		}
	}
	plain(data) {
		return JSON.parse(JSON.stringify(data));
	}
	formateNumber(number) {
		return (number + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
};


