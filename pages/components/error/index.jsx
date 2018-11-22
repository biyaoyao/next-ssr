import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import less from './less/index.less';
import { Button, Row, Col } from 'antd';
import mixins from '../../common/mixins/index';
class Error extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Row styleName="errorApp">
					<Col span={5}>
						<div styleName="logo-box" />
						<div styleName="logo-text">BlinkPaycard</div>
					</Col>
					<Col span={14} styleName="center" className="flex flex-column flex-center">
						<div styleName="not-found-images"></div>
						<div styleName="title">Whate on earth are you doing here?</div>
						<div styleName="tips">The page you are trying to view does not exist.</div>
						<div styleName="button">
							<a href="javascript:">Go back</a>
							<a href="javascript:">Back to home</a>
						</div>
					</Col>
					<Col span={5}></Col>
				</Row>
			</div>
		);
	}
	goHome() {
		this.props.router.push(`/distribute`);
	}
	goBack() {
		this.props.router.goBack();
	}
}
const App =mixins(
	CSSModules(Error, less, {
		allowMultiple: true
	})
);
export default App;
