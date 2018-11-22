import React from 'react';
import less  from './less/index.less';
import CSSModules from 'react-css-modules';
import Mixin from '../../common/mixins/index';
 class MyApp extends React.Component {
	constructor(props) {
        super(props);
	}
	
	componentDidMount() {
		
	}

	render() {
		console.log('render');
		return (
			<div  styleName="index-loading">
				<div styleName="loading-main">
					<div styleName="loading-icon">
						<img src={require('./images/loading.gif')}/>
					</div>
					<div styleName="loading-text">页面加载中...</div>
				</div>
			</div>
		);
	}
}

const App =CSSModules(MyApp, less, {
	allowMultiple: true
});

export default App;