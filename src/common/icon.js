// Icon
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Check } from './svgs/checked.svg';

export default class Icon extends Component {
	static get propTypes() {
		return {
			fill: PropTypes.string,
			name: PropTypes.string,
			height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		};
	}

	static get defaultProps() {
		return {
			fill: '',
			name: '',
			height: 44,
			width: 44,
		};
	}

	shouldComponentUpdate(nextProps) {
		const {
			name, height, width, fill,
		} = this.props;
		if (name !== nextProps.name
			|| height !== nextProps.height
			|| width !== nextProps.width
			|| fill !== nextProps.fill
		) {
			return true;
		}
		return false;
	}

	/* Main Render Function */
	render() {
		const {
			name, fill, width, height,
		} = this.props;
		if (name === 'check') {
			return (
				<Check fill={fill} width={width} height={height} />
			);
		}

		return null;
	}
}
