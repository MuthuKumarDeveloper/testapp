// Select Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEqual, find } from 'lodash';
import Select from '@atlaskit/select';

const Wrapper = styled.div`
	width: 100%;
`;

const SelectCompNormal = styled(Select)`
	.css-5zed9i-control {
		width: 100%;
		background-color: #fff;
		height: 30px;
		border: 1px solid #e2e2e2;

		&:hover {
			background-color: #fff;
			border: 1px solid #ed5901;
		}
	}

	.css-ypi1dq-placeholder {
		color: #BFBFC8;
		font-family: 'Roboto Condensed', sans-serif, Arial;
		line-height: 16px;
		font-size: 14px;
		font-weight: 400;
		padding-bottom: 5px;
		padding-left: 10px;
	}

	.css-1b6odlt, .css-lrg2au-singleValue {
		padding-left: 10px;
		font-size: 14px;
		font-weight: 400;
		color: #101F3B;
		overflow: hidden;
		font-family: 'Roboto Condensed', sans-serif, Arial;
	}

	.css-11moh5o-control {
		width: 100%;
		height: 30px;
		background-color: #fff;
		border: 1px solid #e2e2e2;

		&:hover {
			border-color: #ed5901;
		}
	}

	.css-h6dx7e-option, .css-1m9lks4-option, .css-mw5d94-option {
		font-family: 'Roboto Condensed', sans-serif, Arial;
		font-size: 16px;
		line-height: 17px;
		font-weight: 400;
	}
`;

const SelectCompError = styled(SelectCompNormal)`
	.css-5zed9i-control {
		background-color: #EDBCBD;
		border: 1px solid #EDBCBD;
	}
`;

const WrapperCompError = styled(Wrapper)`
	background-color: #EDBCBD;
	border-radius: 8px;
`;

export default class FormSelect extends Component {
	static get propTypes() {
		return {
			value: PropTypes.string,
			placeholder: PropTypes.string,
			name: PropTypes.string,
			isDisabled: PropTypes.bool,
			tabIndex: PropTypes.number,
			autoFocus: PropTypes.bool,
			onChange: PropTypes.func,
			options: PropTypes.array, // eslint-disable-line
			isError: PropTypes.bool,
		};
	}

	static get defaultProps() {
		return {
			value: '',
			placeholder: '',
			name: '',
			isDisabled: false,
			tabIndex: 0,
			autoFocus: false,
			onChange: null,
			options: [],
			isError: false,
		};
	}

	shouldComponentUpdate(nextProps, _nextState) {
		const {
			placeholder, name, isDisabled, value,
			autoFocus, tabIndex, options, isError,
		} = this.props;

		return (name !== nextProps.name
			|| value !== nextProps.value
			|| placeholder !== nextProps.placeholder
			|| isDisabled !== nextProps.isDisabled
			|| autoFocus !== nextProps.autoFocus
			|| tabIndex !== nextProps.tabIndex
			|| isError !== nextProps.isError
			|| !isEqual(options, nextProps.options)
		);
	}

	/* Main Render Function */
	render() {
		const {
			placeholder, name, isDisabled, value,
			autoFocus, tabIndex, options, onChange,
			isError,
		} = this.props;
		const SelectComp = isError ? SelectCompError : SelectCompNormal;
		const WrapperComp = isError ? WrapperCompError : Wrapper;
		let optValue = null;
		if (value) {
			optValue = find(options, (opt) => (opt.value === value)) || null;
		}

		return (
			<WrapperComp>
				<SelectComp
					placeholder={placeholder}
					name={name}
					value={optValue}
					options={options}
					isDisabled={isDisabled}
					autoFocus={autoFocus}
					tabIndex={tabIndex}
					onChange={onChange}
					isInvalid={isError}
				/>
			</WrapperComp>
		);
	}
}
