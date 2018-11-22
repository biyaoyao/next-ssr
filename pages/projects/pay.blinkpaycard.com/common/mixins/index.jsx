import React, { Component } from 'react';
import { $locate } from '../../store';
import localMesaage from '../../config/i18n/index';
import config from '../../config/index';
const App = (ComposedComponent) =>
	class extends Component {
		constructor(props) {
			super(props);
			this.state = { data: null };
		}
		componentDidMount() {}
		render() {
			return <ComposedComponent $t={this.$t} {...this.props} api={config.api} />;
		}

		$t(key) {
			if ($locate.getState().locate && $locate.getState().locate.localMesaage) {
				return $locate.getState().locate.localMesaage[key];
			} else {
				return localMesaage[config.locate][key];
			}
		}
	};

export default App;
