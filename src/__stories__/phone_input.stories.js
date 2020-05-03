// Core - Input Stories
import React from 'react';
import {
    withKnobs, boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import PhoneInput from '../components/phone_input';

export default {
    title: 'Component/Form',
    component: PhoneInput,
    decorators: [withKnobs],
};

export const phoneInput = () => {
    const isDisabled = boolean('IsDisabled', false);
    const isError = boolean('isError', false);
    const onChange = action('On Change');

    return (
        <PhoneInput
            isDisabled={isDisabled}
            isError={isError}
            onChange={onChange}
        />
    );
};
