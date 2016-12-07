import React from 'react';

const Content = props => {
	let { name } = props;
	return (
		<div>
			<h2>{name}</h2>
		</div>
	);
}
Content.PropTypes = {
	name: React.PropTypes.string
}
export default Content;