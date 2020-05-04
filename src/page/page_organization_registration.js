// Page Organization Registration
import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import PageBase, { PageWrapper } from './page_base';
import PageHeader from './page_header';
import PanelRegistration from '../panel/panel_registration';

import UserApi from '../api/users';

const PageContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: stretch;
	position: relative;
	min-height: 100%;
	width: 100%;
`;

export default class PageDashboard extends PageBase {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
			title: 'Add your personal details',
			subTitle: 'Lorem ipsum is simply dummy text of the printing and typesetting industry',
			activeMenu: 'personalDetails',
		};

		this._data = {
			user: null,
		};
	}

	componentDidMount() {
		return UserApi.getUser()
			.then((res) => {
				if (res) {
					this._data.user = res;
					localStorage.setItem('userInfo', JSON.stringify(res));
					localStorage.setItem('termsAndCondition', 'N');

					this.setState({ dataDate: new Date() });
				}
			}).catch((err) => {
				console.log('Err - GetUser Info', err);
			})
	}

	_changeStep(step) {
		let title = '';
		let subTitle = '';
		let activeMenu = '';

		if (step === 2) {
			title = 'Add your company details';
			subTitle = 'Lorem ipsum is simply dummy text of the printing and typesetting industry';
			activeMenu = 'companyDetails';
		}
		if (step === 3) {
			title = 'Enter your OTP';
			subTitle = 'For your security, we need to verify your identity. We sent a 5-digit code to name@domain.com. Please enter it below.';
			activeMenu = 'emailVerification';
		}

		this.setState({ step, subTitle, title, activeMenu });
	}

	/* Handler Functions */
	_onChangeStep = (step) => {
		this._changeStep(step);
	}

	_onNextStep = () => {
		const { step } = this.state;
		this._changeStep(step + 1);
	}

	_onPrevStep = () => {
		const { step } = this.state;
		this._changeStep(step - 1);
	}

	_onMenuItem = (identifier) => {
		const user = JSON.parse(localStorage.getItem('userInfo'));
		const isChecked = localStorage.getItem('termsAndCondition') || 'N';

		const {
			name, country, phone,
			company, email, job, experiance
		} = user;

		if (identifier === 'personalDetails') {
			this.setState({ activeMenu: identifier, step: 1 });
		}

		if (identifier === 'companyDetails'
			&& name !== '' && country !== '' && phone !== '') {
			this.setState({ activeMenu: identifier, step: 2 });
		}

		if (identifier === 'emailVerification' && experiance !== ''
			&& company !== '' && email !== '' && job !== '' && isChecked === 'Y') {
			this.setState({ activeMenu: identifier, step: 3 });
		}
	}

	_onFinalize = (data) => {
		localStorage.setItem('userInfo', JSON.stringify(data));
		navigate('/complete');
	}

	/* Main Render Function */
	render() {
		const { step, subTitle, title, activeMenu } = this.state;
		const { user } = this._data;

		if (!user) {
			return null;
		}

		return (
			<PageWrapper>
				<PageHeader activeMenu={activeMenu} onMenuItem={this._onMenuItem} />
				<PageContent>
					<PanelRegistration
						user={user}
						step={step}
						title={title}
						subTitle={subTitle}
						onNext={this._onNextStep}
						onPrev={this._onPrevStep}
						onFinalize={this._onFinalize}
					/>
				</PageContent>
			</PageWrapper>
		);
	}
}
