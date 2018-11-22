import Link from 'next/link';
import React from 'react';
import Router from 'next/router';
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<a
					onClick={() => {
						console.log(this.props);
						Router.push('/');
					}}
				>
					projectA Index Page
				</a>

				<p>This is the projectA about page</p>
				{this.props.children}
			</div>
		);
	}
}
