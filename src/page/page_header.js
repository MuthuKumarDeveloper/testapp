// Page Header Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
    height: 35px;
	background: #2d4b63;
	position: sticky;
	top: 0;
	z-index: 10;
`;

const Content = styled.div`
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	padding-left: 48px;
`;

const MenuItem = styled.div`
	display: flex;
	height: 36px;
	font-family: 'Roboto Condensed', sans-serif, Arial;
	font-size: 13px;
	line-height: 1px;
	font-weight: 700;
	color: #c5c9d0;
	cursor: pointer;
	text-decoration: none;
	margin-right: 30px;
	padding-top: 6px;
`;

const Title = styled.div`
	font-family: 'Roboto Condensed', sans-serif, Arial;
	font-size: 12px;
	line-height: 22px;
	font-weight: 700;
	color: #c5c9d0;
`;

const TitleActive = styled(Title)`
	color: #fff;
`;

const MenuItemActive = styled(MenuItem)`
	color: #262626;
	border-bottom: 2px solid #276EF0;
`;

const Step = styled.div`
	width: 22px;
	height: 22px;
	font-family: 'Roboto Condensed', sans-serif, Arial;
	font-size: 11px;
	line-height: 13px;
	font-weight: 700;
	border-radius: 22px;
	background-color: #29435a;
	text-align: center;
	padding-top: 4px;
	margin-right: 12px;
`;

const StepActive = styled(Step)`
	background-color: #ed5901;
	color: #fff;
`;


export default class PageHeader extends Component {
	constructor(props) {
		super(props);

		this._data = {
			menuItems: [
				{
					step: 1,
					identifier: 'personalDetails',
					title: 'Personal Details',
				},
				{
					step: 2,
					identifier: 'companyDetails',
					title: 'Company Details',
				},
				{
					step: 3,
					identifier: 'emailVerification',
					title: 'Email Verification',
				},
			],
		};
	}

	static get propTypes() {
		return {
			activeMenu: PropTypes.string,
		};
	}

	static get defaultProps() {
		return {
			activeMenu: '',
		};
	}

	/* Handler Function */
	_onMenuItem(identifier) {
		const { onMenuItem } = this.props;

		if (onMenuItem) {
			onMenuItem(identifier);
		}
	}

	/* Other Render Function */
	_renderMenuItem(menu) {
		const { activeMenu } = this.props;
		const MenuItemComp = activeMenu === menu.identifier ? MenuItemActive : MenuItem;
		const StepComp = activeMenu === menu.identifier ? StepActive : Step;
		const TitleComp = activeMenu === menu.identifier ? TitleActive : Title;

		return (
			<MenuItemComp
				key={menu.identifier}
				onClick={this._onMenuItem.bind(this, menu.identifier)}
			>
				<StepComp>{menu.step}</StepComp>
				<TitleComp>{menu.title}</TitleComp>
			</MenuItemComp>
		);
	}

	_renderMenu() {
		return (
			<Menu>
				{this._data.menuItems.map((menu) => this._renderMenuItem(menu))}
			</Menu>
		);
	}

	/* Main Render Function */
	render() {
		return (
			<Wrapper>
				<Content>
					{this._renderMenu()}
				</Content>
			</Wrapper>
		);
	}
}
