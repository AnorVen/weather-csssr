import React, { PureComponent } from 'react';

class Country extends PureComponent {
	render() {
		const { title, showCity } = this.props;
		return (
			<div onClick={() => showCity(title)}>
				{console.log('Country render')}
				{title}
			</div>
		);
	}
}

export default Country;
