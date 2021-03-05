import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import HW12 from '../p2-homeworks/h12/HW12';
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";

export default {
    title: 'HW/HW12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story<any> = (args) => <HW12 {...args} />;

export const HW12Example = Template.bind({});
HW12Example.args = {};

