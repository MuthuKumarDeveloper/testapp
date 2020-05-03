// Core - Input Stories
import React from 'react';
import {
    withKnobs, text, boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Select from '../components/select';

export default {
    title: 'Component/Form',
    component: Select,
    decorators: [withKnobs],
};


export const selectComp = () => {
    const options = [
        { label: 'Adelaide', value: 'adelaide' },
        { label: 'Brisbane', value: 'brisbane' },
        { label: 'Canberra', value: 'canberra' },
        { label: 'Darwin', value: 'darwin' },
        { label: 'Hobart', value: 'hobart' },
        { label: 'Melbourne', value: 'melbourne' },
        { label: 'Perth', value: 'perth' },
        { label: 'Sydney', value: 'sydney' },
    ];

    const isDisabled = boolean('IsDisabled', false);
    const name = text('Name', 'text');
    const isError = boolean('isError', false);
    const value = text('Value', '');
    const onChange = action('On Change');

    return (
        <Select
            isDisabled={isDisabled}
            name={name}
            value={value}
            options={options}
            isError={isError}
            onChange={onChange}
        />
    );
};
