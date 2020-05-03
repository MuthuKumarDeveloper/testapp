// Core - Input Stories
import React from 'react';
import {
    withKnobs, boolean, text,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from '../components/checkbox';

export default {
    title: 'Component/Form',
    component: Checkbox,
    decorators: [withKnobs],
};

export const checkbox = () => {
    const isChecked = boolean('IsChecked', false);
    const children = text('Children', 'I accept the');
    const title = text('title', 'Terms and condition');
    const onChange = action('On Change');

    return (
        <Checkbox
            isChecked={isChecked}
            onChange={onChange}
            children={children}
            title={title}
        />
    );
};
