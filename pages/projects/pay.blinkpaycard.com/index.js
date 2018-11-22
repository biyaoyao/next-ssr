import App, { Container } from 'next/app';
export default class projectApp extends App {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			router: {},
			time: 10
		};
	}

	async componentDidMount() {
		console.error('componentDidMount', 'pay.blinkpaycard.com');
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		);
	}
}
