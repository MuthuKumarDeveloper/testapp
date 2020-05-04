// Input Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
`;

const TextInput = styled.input`
	width: 100%;
	height: 30px;
	border: 1px solid #e2e2e2;
	font-family: 'Roboto Condensed', sans-serif, Arial;
	font-size: 12px;
	line-height: 14px;
	font-weight: 400;
    color: #101F3B;
    padding-left: 10px;
	box-shadow: 0px 0px 0px -115px rgba(0,0,0,0.75);

	&:focus {
        outline: none;
        border: 1px solid #ed5901;
	}
`;

const TextInputError = styled(TextInput)`
	background-color: #EDBCBD;
	color: #de3115;
`;

const TextInputDisabled = styled(TextInput)`
	background-color: #F6F7Fa;
	color: #A4A4A4;
`;

const InputSmall = styled(TextInput)`
    height: 40px;
	width: 40px;
	font-weight: 600;
    padding-left: 0;
    text-align: center;
`;

export default class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value,
		};
	}

	static get propTypes() {
		return {
			placeholder: PropTypes.string,
			isDisabled: PropTypes.bool,
			name: PropTypes.string,
			maxLength: PropTypes.number,
			type: PropTypes.oneOf(['text', 'email']),
			size: PropTypes.oneOf(['normal', 'small']),
			isError: PropTypes.bool,
			value: PropTypes.string,
			tabIndex: PropTypes.number,
			autoFocus: PropTypes.bool,
			onChange: PropTypes.func,
		};
	}

	static get defaultProps() {
		return {
			placeholder: '',
			isDisabled: false,
			name: '',
			maxLength: 0,
			type: 'text',
			size: 'normal',
			isError: false,
			value: '',
			tabIndex: 0,
			autoFocus: false,
			onChange: null,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		const {
			placeholder, isDisabled, name,
			maxLength, isError, size,
			tabIndex, autoFocus, type,
		} = this;

		const { value } = this.state;

		return (value !== nextState.value
			|| placeholder !== nextProps.placeholder
			|| isDisabled !== nextProps.isDisabled
			|| name !== nextProps.name
			|| maxLength !== nextProps.maxLength
			|| type !== nextProps.type
			|| isError !== nextProps.isError
			|| tabIndex !== nextProps.tabIndex
			|| autoFocus !== nextProps.autoFocus
			|| size !== nextProps.size);
	}

	_onChange = (ev) => {
		const { onChange } = this.props;

		if (ev.target.value) {
			this.setState({
				value: ev.target.value,
			});
		} else {
			this.setState({ value: ev.target.value });
		}

		if (onChange) {
			onChange(ev.target.value);
		}
	}

	/* Main Render Function */
	render() {
		const {
			placeholder, isDisabled, name, maxLength, isError,
			tabIndex, autoFocus, type, size
		} = this.props;

		const InputComp = isError ? TextInputError : (size === 'small' ? InputSmall : (isDisabled ? TextInputDisabled : TextInput));
		const { value } = this.state;

		return (
			<Wrapper>
				<InputComp
					placeholder={placeholder}
					name={name}
					type={type}
					disabled={isDisabled}
					maxLength={maxLength}
					isError={isError}
					value={value}
					autoFocus={autoFocus}
					tabIndex={tabIndex}
					onChange={this._onChange}
				/>
			</Wrapper>
		);
	}
}
