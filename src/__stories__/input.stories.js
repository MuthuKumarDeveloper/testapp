// Core - Input Stories
import React from 'react';
import {
    withKnobs, text, boolean, select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from '../components/input';

export default {
    title: 'Component/Form',
    component: Input,
    decorators: [withKnobs],
};


export const input = () => {
    const sizeOptions = {
        Normal: 'normal',
        Small: 'small',
    };

    const size = select('Size', sizeOptions, 'normal');
    const isDisabled = boolean('IsDisabled', false);
    const name = text('Name', 'text');
    const isError = boolean('isError', false);
    const value = text('Value', '');
    const onChange = action('On Change');

    return (
        <Input
            size={size}
            isDisabled={isDisabled}
            name={name}
            value={value}
            isError={isError}
            onChange={onChange}
        />
    );
};
