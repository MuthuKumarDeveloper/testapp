// Checkbox Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEqual } from 'lodash';

import IconCheck from '../common/icon';

const Wrapper = styled.div`
	width: 100%;
	cursor: pointer;
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;

	:focus {
		outline: none;
	}
`;

const ColCheck = styled.div`
	border: 1px solid #e2e2e2;
	background-color: #fafafa;
	border-radius: 3px;
	width: 18px;
	height: 18px;
`;

const IconInfo = styled.div`
	margin-left: 4px;
	margin-top: -2px;
`;

const ColCheckwrap = styled.span`
	display: block;
	float: left;
	width: 18px;
`;

const Checkbox = styled.span`
	border-radius: 7px;
	display: block;
	float: left;
`;

const ColInfo = styled.div`
`;

const Title = styled.span`
	font-family: 'Roboto Condensed', sans-serif, Arial;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	margin-left: 12px;
	color: #15243f;

	a, a:visited, a:active {
		color: #276ef1;
		text-decoration: none;
		font-family: 'Roboto Condensed', sans-serif, Arial;
		font-weight: 400;
		font-size: 14px;
		line-height: 19px;
	}
	a:hover {
		color: #262626;
	}
`;

const TitleInfo = styled(Title)`
	color: #ed5901;
	margin-left: 4px;
	font-weight: 600;
`;

export default class FormCheckbox extends Component {
	static get propTypes() {
		return {
			children: PropTypes.any, // eslint-disable-line
			name: PropTypes.string,
			title: PropTypes.string,
			tabIndex: PropTypes.number,
			isChecked: PropTypes.bool,
			onChange: PropTypes.func,
		};
	}

	static get defaultProps() {
		return {
			children: null,
			name: '',
			title: '',
			tabIndex: 0,
			isChecked: false,
			onChange: null,
		};
	}

	shouldComponentUpdate(nextProps) {
		const {
			children, name, tabIndex, isChecked,
			title,
		} = this;

		return (!isEqual(children, nextProps.children)
			|| name !== nextProps.name
			|| tabIndex !== nextProps.tabIndex
			|| isChecked !== nextProps.isChecked
			|| title !== nextProps.title
		);
	}

	/* Other Render Function */
	_renderInfo() {
		const {
			children, title,
		} = this.props;

		return (
			<ColInfo>
				<Title>
					{children}
					<TitleInfo>{title}</TitleInfo>
				</Title>
			</ColInfo>
		);
	}

	/* Main Render Function */
	render() {
		const { isChecked, onChange, tabIndex } = this.props;

		return (
			<Wrapper>
				<Content onClick={onChange} tabIndex={tabIndex}>
					<ColCheck>
						<ColCheckwrap>
							<Checkbox>
								{isChecked && (
									<IconInfo>
										<IconCheck
											fill="#276ef1"
											width={10}
											height={10}
											name="check"
										/>
									</IconInfo>
								)}
							</Checkbox>
						</ColCheckwrap>
					</ColCheck>
					{this._renderInfo()}
				</Content>
			</Wrapper>
		);
	}
}
