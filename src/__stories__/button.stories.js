// Core - Input Stories
import React from 'react';
import {
    withKnobs, boolean, text, select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../components/button';

export default {
    title: 'Component/Form',
    component: Button,
    decorators: [withKnobs],
};

export const button = () => {
    const sizeOptions = {
        Normal: 'normal',
        Small: 'small',
        Medium: 'medium',
        Full: 'full',
    };

    const size = select('Size', sizeOptions, 'normal');
    const title = text('Name', 'Next');
    const back = text('Back', 'Back');
    const disabled = boolean('Disabled', false);
    const onClick = action('on Click');

    return (
        <>
            <Button
                size="small"
                title={back}
                onClick={onClick}
            />
            <Button
                size={size}
                title={title}
                disabled={disabled}
                onClick={onClick}
            />
        </>
    );
};
