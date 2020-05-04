// Panel Dashboard Create Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEqual } from 'lodash';
import validator from 'validator';

import Input from '../components/input';
import Select from '../components/select';
import PhoneInput from '../components/phone_input';
import Button from '../components/button';
import CheckBox from '../components/checkbox';
import Countries from '../countries';

const Wrapper = styled.div`
    height: 100%;
    margin: auto auto;
`;

const Heading = styled.div`
    width: 362px;
    text-align: center;
    font-size: 24px;
    color: #101F3B;
    line-height: 26px;
    font-family: 'Roboto Condensed', sans-serif, Arial;
    font-weight: 600;
    margin-bottom: 16px;
`;

const SubHeading = styled(Heading)`
    font-size: 10px;
    color: #bbbbbb;
    line-height: 10px;
    font-weight: 400;
    margin-bottom: 20px;
`;

const Content = styled.div`
    width: 362px;
    background-color: #fff;
    margin-bottom: 20px;
`;

const FormFields = styled.div`
    padding: 20px;
`;

const FormRow = styled.div`
    margin-bottom: 25px;
`;

const RowLabel = styled.p`
    font-size: 12px;
    color: #bbbbbb;
    line-height: 12px;
    font-family: 'Roboto Condensed', sans-serif, Arial;
	font-weight: 400;
    margin-bottom: 10px;
`;

const GenderCompNormal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #e2e2e2;
    width: 64px;
    height: 30px;
    font-size: 10px;
    line-height: 12px;
    margin-right: 10px;
    font-family: 'Roboto Condensed', sans-serif, Arial;
    color: #101F3B;
`;

const GenderCompActive = styled(GenderCompNormal)`
    background-color: #fceee5;
    color: #ed5901;
    border: 1px solid #fceee5
`;

const FormRowInfo = styled(FormRow)`
    display: flex;
`;

const Title = styled.span`
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #bbbbbb;
    line-height: 12px;
    font-family: 'Roboto Condensed', sans-serif, Arial;
    font-weight: 400;
`;

const Info = styled(Title)`
    color: #ed5901;
`;

const FormFooter = styled.div`
    display: flex;
    flex-direction: row;
`;

const ColLeft = styled.div`
    width: 68px;
    margin-right: 12px;
`;

const ColRight = styled.div`
    width: 100%;
`;

const FormRowInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: -10px;
`;

const FooterInfo = styled.div`
    font-size: 12px;
    color: #bbbbbb;
    text-align: center;
    line-height: 16px;
    font-family: 'Roboto Condensed', sans-serif, Arial;
    font-weight: 400;
    background-color: #fff;
    border-top: 3px solid #fafafa;
    padding: 16px;
`;

const EmailInfo = styled.span`
    font-size: 12px;
    color: #ed5901;
    line-height: 12px;
    font-family: 'Roboto Condensed', sans-serif, Arial;
    font-weight: 400;
`;

const ImageUploader = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;

const UploaderContent = styled.div`
    width: 64px;
    height: 64px;
    border: 2px dotted #f1f4f5;
    border-radius: 64px;
    margin-right: 12px;
`;

const ImageUpload = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    width: 64px;

    &:hover {
        opacity: 1;
    }
`;

const FormInput = styled.input`
    opacity: 0;
    height: 64px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 64px;
    height: 64px;
    border: 0 none;
`;

const UploadTitle = styled.div`
    font-size: 12px;
    color: #ed5901;
    line-height: 12px;
    font-family: 'Roboto Condensed', sans-serif, Arial;
    font-weight: 400;
    align-self: center;
`;

const UploadInput = styled.div`
    position: absolute;
    margin-top: -65px
`;

export default class PanelRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeState: 'male',
            user: null,
            isErrorName: false,
            isErrorCountry: false,
            isErrPhone: false,
            isErrorCompany: false,
            isErrorEmail: false,
            isErrorJob: false,
            isErrorExperiance: false,
            imagePreviewUrl: '',
            file: '',
            isChecked: false,
            code1: '',
            code2: '',
            code3: '',
            code4: '',
            code5: '',
            code6: '',
        };

        this._data = {
            genderOptions: [
                { label: 'Male', ident: 'male' },
                { label: 'Female', ident: 'female' },
                { label: 'Others', ident: 'others' },
            ],
            stateOption: [
                { value: 'AN', label: 'Andaman and Nicobar Island' },
                { value: 'AP', label: 'Andhra Pradesh' },
                { value: 'AR', label: 'Arunachal Pradesh' },
                { value: 'AS', label: 'Assam' },
                { value: 'BR', label: 'Bihar' },
                { value: 'CH', label: 'Chandigarh' },
                { value: 'CG', label: 'Chhattisgarh' },
                { value: 'DN', label: 'Dadra and Nagar Haveli' },
                { value: 'DD', label: 'Daman and Diu' },
                { value: 'DL', label: 'Delhi' },
                { value: 'GA', label: 'Goa' },
                { value: 'GJ', label: 'Gujarat' },
                { value: 'HR', label: 'Haryana' },
                { value: 'HP', label: 'Himachal Pradesh' },
                { value: 'JK', label: 'Jammu and Kashmir' },
                { value: 'JH', label: 'Jharkhand' },
                { value: 'KA', label: 'Karnataka' },
                { value: 'KL', label: 'Kerala' },
                { value: 'LD', label: 'Lakshadweep' },
                { value: 'MP', label: 'Madhya Pradesh' },
                { value: 'MH', label: 'Maharashtra' },
                { value: 'MN', label: 'Manipur' },
                { value: 'ML', label: 'Meghalaya' },
                { value: 'MZ', label: 'Mizoram' },
                { value: 'NL', label: 'Nagaland' },
                { value: 'OR', label: 'Odisha' },
                { value: 'PY', label: 'Puducherry' },
                { value: 'PB', label: 'Punjab' },
                { value: 'RJ', label: 'Rajasthan' },
                { value: 'SK', label: 'Sikkim' },
                { value: 'TN', label: 'Tamil Nadu' },
                { value: 'TG', label: 'Telangana' },
                { value: 'TR', label: 'Tripura' },
                { value: 'UK', label: 'Uttarakhand' },
                { value: 'UP', label: 'Uttar Pradesh' },
                { value: 'WB', label: 'West Bengal' },
            ]
        };
    }

    static get propTypes() {
        return {
            user: PropTypes.object,
            step: PropTypes.number,
            title: PropTypes.string,
            subTitle: PropTypes.string,
            onNext: PropTypes.func,
            onPrev: PropTypes.func,
            onFinalize: PropTypes.func,
        };
    }

    static get defaultProps() {
        return {
            user: null,
            step: 1,
            title: '',
            subTitle: '',
            onNext: null,
            onPrev: null,
            onFinalize: null,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {
            step, subTitle, title, user
        } = this.props;

        return (step !== nextProps.value
            || title !== nextProps.title
            || subTitle !== nextProps.subTitle
            || !isEqual(this.state, nextState)
            || !isEqual(user, nextProps.user)
        );
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            user: nextProps.user,
        };
    }

    /* Handler Function */
    _onClickGender(activeState) {
        this.setState({ activeState });
    }

    _onChangeInput(name, value) {
        this.state.user[name] = value; // eslint-disable-line
        localStorage.setItem('userInfo', JSON.stringify(this.state.user));

        this.setState({ dataDate: new Date() });
    }

    _onChangeSelect(name, opt) {
        this.state.user[name] = opt ? opt.value : ''; // eslint-disable-line
        localStorage.setItem('userInfo', JSON.stringify(this.state.user));

        this.setState({ dataDate: new Date() });
    }

    _onChangeCheckbox(isChecked) {
        this.setState({ isChecked: isChecked });
        localStorage.setItem('termsAndCondition', isChecked ? 'Y' : 'N');
    }

    _onChangeCode(name, value) {
        this.setState({ [name]: value });
    }

    _onNextVerification = () => {
        const { onNext } = this.props;
        let noError = 0;
        const { user } = this.state;
        const { name, country, phone } = user;

        const stateObj = {
            isErrorName: false,
            isErrPhone: false,
            isErrorCountry: false,
        }

        if (validator.isEmpty(name)) {
            stateObj.isErrorName = true;
            noError++;
        }

        if (validator.isEmpty(country)) {
            stateObj.isErrorCountry = true;
            noError++;
        }

        if (validator.isEmpty(phone)) {
            stateObj.isErrPhone = true;
            noError++;
        }

        this.setState(stateObj);
        if (noError === 0) {
            this.setState({
                isErrorName: false,
                isErrPhone: false,
                isErrorCountry: false,
            });

            if (onNext) {
                onNext();
            }
        }
    }

    _onFinalize = () => {
        const { onFinalize } = this.props;

        const {
            code1, code2, code3,
            code4, code5, code6,
            user,
        } = this.state;

        const { code } = user;

        let noError = 0;

        if (validator.isEmpty(code1) || validator.isEmpty(code2) || validator.isEmpty(code3)
            || validator.isEmpty(code4) || validator.isEmpty(code5) || validator.isEmpty(code6)) {
            noError++;
            alert('Please fill all the fields');
        }

        const otpCode = `${code1}${code2}${code3}${code4}${code5}${code6}`;

        if (otpCode !== code) {
            noError++;
        }

        if (noError === 0) {
            if (onFinalize) {
                onFinalize(user)
            }
        }
    }

    _onNextVerificationStep2 = () => {
        const { onNext } = this.props;
        let noError = 0;
        const { user, isChecked } = this.state;
        const { company, email, job, experiance } = user;

        const stateObj = {
            isErrorCompany: false,
            isErrorEmail: false,
            isErrorJob: false,
            isErrorExperiance: false,
        }

        if (validator.isEmpty(company)) {
            stateObj.isErrorCompany = true;
            noError++;
        }

        if (validator.isEmpty(email) || !validator.isEmail(email)) {
            stateObj.isErrorEmail = true;
            noError++;
        }

        if (validator.isEmpty(job)) {
            stateObj.isErrorJob = true;
            noError++;
        }

        if (validator.isEmpty(experiance)) {
            stateObj.isErrorExperiance = true;
            noError++;
        }

        this.setState(stateObj);
        if (noError === 0 && isChecked) {
            this.setState({
                isErrorCompany: false,
                isErrorEmail: false,
                isErrorJob: false,
                isErrorExperiance: false,
            });

            if (onNext) {
                onNext();
            }
        }
    }

    _uploadImage = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
            });
        }
        reader.readAsDataURL(file);
    }

    /* Other Render Function */
    _renderGenderDetails(info, _idx) {
        const { activeState } = this.state;
        const GenderComp = activeState === info.ident ? GenderCompActive : GenderCompNormal;

        return (
            <GenderComp key={info.ident} onClick={this._onClickGender.bind(this, info.ident)}>
                {info.label}
            </GenderComp>
        );
    }

    _renderPersonalDetails() {
        const { genderOptions, stateOption } = this._data;
        const { step } = this.props;
        const { user, isErrorName, isErrPhone, isErrorCountry } = this.state;

        let options = [];
        const { name, country, state, phone } = user;
        if (country === 'IN') {
            options = stateOption;
        }

        if (step !== 1) {
            return null;
        }

        return (
            <FormFields>
                <FormRow>
                    <RowLabel>Full Name</RowLabel>
                    <Input
                        value={name}
                        name="fullName"
                        maxLength={128}
                        isError={isErrorName}
                        type="text"
                        onChange={this._onChangeInput.bind(this, 'name')}
                    />
                </FormRow>
                <RowLabel>Gender</RowLabel>
                <FormRowInfo>
                    {genderOptions.map((info, idx) => this._renderGenderDetails(info, idx))}
                </FormRowInfo>
                <FormRow>
                    <RowLabel>Country</RowLabel>
                    <Select
                        options={Countries}
                        value={country}
                        name="country"
                        isError={isErrorCountry}
                        onChange={this._onChangeSelect.bind(this, 'country')}
                    />
                </FormRow>
                <FormRow>
                    <RowLabel>State</RowLabel>
                    <Select
                        value={state}
                        options={options}
                        name="state"
                        onChange={this._onChangeSelect.bind(this, 'state')}
                    />
                </FormRow>
                <FormRow>
                    <RowLabel>Phone</RowLabel>
                    <PhoneInput
                        value={phone}
                        country={country.toLowerCase()}
                        isError={isErrPhone}
                        onChange={this._onChangeInput.bind(this, 'phone')}
                    />
                </FormRow>
                <Button
                    title="Next"
                    onClick={this._onNextVerification}
                />
            </FormFields>
        );
    }

    _renderCompanyDetails() {
        const { onPrev, step } = this.props;
        const {
            user, isErrorCompany, isErrorEmail,
            isErrorJob, isErrorExperiance, imagePreviewUrl,
            isChecked,
        } = this.state;

        const { company, email, job, experiance } = user;

        if (step !== 2) {
            return null;
        }

        return (
            <FormFields>
                <FormRow>
                    <ImageUploader>
                        <UploaderContent>
                            <ImageUpload>
                                <Image for="photo-upload" alt="" src={imagePreviewUrl || '/images/default_image.png'} />
                            </ImageUpload>
                            <UploadInput>
                                <FormInput id="photo-upload" type="file" onChange={this._uploadImage} />
                            </UploadInput>
                        </UploaderContent>
                        <UploadTitle>Upload your company logo</UploadTitle>
                    </ImageUploader>
                </FormRow>
                <FormRow>
                    <RowLabel>Company Name</RowLabel>
                    <Input
                        value={company}
                        name="company"
                        maxLength={128}
                        type="text"
                        isError={isErrorCompany}
                        onChange={this._onChangeInput.bind(this, 'company')}
                    />
                </FormRow>
                <FormRow>
                    <RowLabel>Email Id</RowLabel>
                    <Input
                        value={email}
                        name="email"
                        maxLength={128}
                        type="email"
                        isError={isErrorEmail}
                        onChange={this._onChangeInput.bind(this, 'email')}
                    />
                </FormRow>
                <FormRow>
                    <RowLabel>Job Title</RowLabel>
                    <Input
                        value={job}
                        name="job"
                        maxLength={128}
                        type="text"
                        isError={isErrorJob}
                        onChange={this._onChangeInput.bind(this, 'job')}
                    />
                </FormRow>
                <FormRow>
                    <RowLabel>Years of Experiance</RowLabel>
                    <Input
                        value={experiance}
                        name="experiance"
                        maxLength={128}
                        type="text"
                        isError={isErrorExperiance}
                        onChange={this._onChangeInput.bind(this, 'experiance')}
                    />
                </FormRow>
                <FormRow>
                    <CheckBox
                        children="I accept the"
                        title="Terms and condition"
                        isChecked={isChecked}
                        onChange={this._onChangeCheckbox.bind(this, !isChecked)}
                    />
                </FormRow>
                <FormFooter>
                    <ColLeft>
                        <Button
                            title="Back"
                            size="small"
                            onClick={onPrev}
                        />
                    </ColLeft>
                    <ColRight>
                        <Button
                            title="Next"
                            onClick={this._onNextVerificationStep2}
                        />
                    </ColRight>
                </FormFooter>
            </FormFields>
        );
    }

    _renderVerification() {
        const { onPrev, step } = this.props;

        if (step !== 3) {
            return null;
        }

        return (
            <>
                <FormFields>
                    <FormRow>
                        <RowLabel>Enter Your Code</RowLabel>
                        <FormRowInput>
                            <Input
                                size="small"
                                name="code1"
                                maxLength={1}
                                type="text"
                                onChange={this._onChangeCode.bind(this, 'code1')}
                            />
                            <Input
                                size="small"
                                name="code2"
                                maxLength={1}
                                type="text"
                                onChange={this._onChangeCode.bind(this, 'code2')}
                            />
                            <Input
                                size="small"
                                name="code33"
                                maxLength={1}
                                type="text"
                                onChange={this._onChangeCode.bind(this, 'code3')}
                            />
                            <Input
                                size="small"
                                name="code4"
                                maxLength={1}
                                type="text3"
                                onChange={this._onChangeCode.bind(this, 'code4')}
                            />
                            <Input
                                size="small"
                                name="code5"
                                maxLength={1}
                                type="text"
                                onChange={this._onChangeCode.bind(this, 'code5')}
                            />
                            <Input
                                size="small"
                                name="code6"
                                maxLength={1}
                                type="text"
                                onChange={this._onChangeCode.bind(this, 'code6')}
                            />
                        </FormRowInput>
                    </FormRow>
                    <FormFooter>
                        <ColLeft>
                            <Button
                                title="Back"
                                size="small"
                                onClick={onPrev}
                            />
                        </ColLeft>
                        <ColRight>
                            <Button
                                title="Next"
                                onClick={this._onFinalize}
                            />
                        </ColRight>
                    </FormFooter>
                </FormFields>
                <FooterInfo>
                    Didn't receive the email? Check your spam filter for an email from
                    <EmailInfo>&nbsp;name@domain.com</EmailInfo>
                </FooterInfo>
            </>
        );
    }

    /* Main Render Function */
    render() {
        const { step, title, subTitle } = this.props;

        return (
            <Wrapper>
                <Heading>{title}</Heading>
                <SubHeading>{subTitle}</SubHeading>
                <Content>
                    {this._renderPersonalDetails()}
                    {this._renderCompanyDetails()}
                    {this._renderVerification()}
                </Content>
                {step !== 3 && <Title>Already have an account?<Info>&nbsp;Login</Info></Title>}
            </Wrapper>
        );
    }
}
