import React from 'react';
import  ErrorPage from './components/error/index';
export default class Error extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		return (
			<ErrorPage />
		);
	}
}
