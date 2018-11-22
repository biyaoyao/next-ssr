import Link from 'next/link';
export default (props) => (
	<div>
		<Link href="/">
			<a>projectA Index Page</a>
		</Link>
		<p>This is the projectA  about page</p>
		{props.children}
	</div>
);
