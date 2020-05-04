// PhoneInput Component
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const Wrapper = styled.div`
    width: 100%;

    .react-tel-input {
        border: 1px solid #e2e2e2;

        &:hover {
            border: 1px solid #ed5901;
        }
    }
    
    .react-tel-input .form-control {
        width: 100%;
        padding-left: 60px;
        border-radius: 0;
        border: 0 none;

        &:hover {
            border: 0;
        }
    }

    .react-tel-input .selected-flag {
        width: 50px;
    }

    .react-tel-input .flag-dropdown {
        background-color: #f9f9f9;
        border-right-color: transparent;
        border-radius: 0;
        border: 0 none;

        &:hover {
            border: 0;
        }
    }
`;

const WrapperCompError = styled(Wrapper)`
    .form-control {
        background-color: #EDBCBD;
	    color: #de3115;
    }
`;

const WrapperDisabled = styled(Wrapper)`
    .form-control {
        background-color: #F6F7Fa;
	    color: #A4A4A4;
    }

    .react-tel-input {
        &:hover {
            border: 1px solid #e2e2e2;
        }
    }
`;

export default class PhoneInputComponent extends Component {
    static get propTypes() {
        return {
            value: PropTypes.string,
            isDisabled: PropTypes.bool,
            isError: PropTypes.bool,
            country: PropTypes.string,
            onChange: PropTypes.func,
        };
    }

    static get defaultProps() {
        return {
            value: '',
            isDisabled: false,
            isError: false,
            country: '',
            onChange: null,
        };
    }

    shouldComponentUpdate(nextProps, _nextState) {
        const {
            isDisabled, value, isError, country,
        } = this.props;

        return (value !== nextProps.value
            || isDisabled !== nextProps.isDisabled
            || isError !== nextProps.isError
            || country !== nextProps.country
        );
    }

    /* Handler Function */
    _onChange = (value) => {
        const { onChange } = this.props;

        if (onChange) {
            onChange(value);
        }
    };

    // Main Render
    render() {
        const { value, isError, isDisabled, country } = this.props;

        const WrapperComp = isError ? WrapperCompError : (isDisabled ? WrapperDisabled : Wrapper);

        return (
            <WrapperComp>
                <PhoneInput
                    inputExtraProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true
                    }}
                    disabled={isDisabled}
                    country={country}
                    value={value}
                    onChange={this._onChange}
                />
            </WrapperComp>
        );
    }
}
