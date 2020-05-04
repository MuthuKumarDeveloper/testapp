// Button Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	outline: 0;
`;

/* Primary Button */
const ButtonPrimary = styled.button`
    background-color: #ed5901;
    border-radius: 4px;
    height: 35px;
    width: 100%;
    border: 0 none;
	cursor: pointer;
	transition: background-color .5s ease;

	&:hover {
		background-color: #ffd27f;
	}
`;

const ButtonSmall = styled(ButtonPrimary)`
    height: 35px;
	background-color: #f5f6f8;
	
	&:hover {
		background-color: #f0f0f0;
	}
`;

const ButtonPrimaryDisabled = styled(ButtonPrimary)`
    background-color: #faceb3;
    cursor: default;

	&:hover {
		background-color: #faceb3;
	}
`;

/* Label Primary */
const LabelPrimary = styled.div`
    color: #fff;
	font-weight: 700;
	font-size: 12px;
	font-family: 'Roboto Condensed', sans-serif, Arial;
	line-height: 14px;
`;

const LabelPrimaryDisabled = styled(LabelPrimary)`
	color: #fff;
`;

const LabelSmall = styled(LabelPrimary)`
	color: #101F3B;
`;

const ButtonFull = styled(ButtonPrimary)`
    width: 100%;
    background-color: #ed5901;
`;

export default class Button extends Component {
	static get propTypes() {
		return {
			title: PropTypes.string,
			buttonType: PropTypes.oneOf(['button', 'submit']),
			size: PropTypes.oneOf(['normal', 'small', 'full']),
			disabled: PropTypes.bool,
			isCreate: PropTypes.bool,
			tabIndex: PropTypes.number,
			onClick: PropTypes.func,
		};
	}

	static get defaultProps() {
		return {
			title: '',
			type: 'normal',
			buttonType: 'button',
			size: 'normal',
			disabled: false,
			isCreate: false,
			tabIndex: 0,
			onClick: null,
		};
	}

	shouldComponentUpdate(nextProps, _nextState) {
		const {
			title, type, disabled, size, tabIndex, buttonType, isCreate,
		} = this.props;
		if (title !== nextProps.title
			|| type !== nextProps.type
			|| size !== nextProps.size
			|| disabled !== nextProps.disabled
			|| tabIndex !== nextProps.tabIndex
			|| isCreate !== nextProps.isCreate
			|| buttonType !== nextProps.buttonType
		) {
			return true;
		}
		return false;
	}

	/* Other Render Functions */
	_renderContent() {
		const {
			disabled, title, size, tabIndex, buttonType,
		} = this.props;

		const ButtonComp = disabled ? ButtonPrimaryDisabled
			: (size === 'full' ? ButtonFull : (size === 'small' ? ButtonSmall : ButtonPrimary));
		const LabelComp = disabled ? LabelPrimaryDisabled : (size === 'small' ? LabelSmall : LabelPrimary);

		return (
			<ButtonComp tabIndex={tabIndex} type={buttonType}>
				<LabelComp>{title}</LabelComp>
			</ButtonComp>
		);
	}

	/* Main Render Function */
	render() {
		const {
			disabled, onClick,
		} = this.props;
		return (
			<Wrapper
				onClick={disabled ? null : onClick}
				disabled={disabled}
			>
				{this._renderContent()}
			</Wrapper>
		);
	}
}
