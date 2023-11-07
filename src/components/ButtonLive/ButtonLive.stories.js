import React from 'react';
import { ButtonLive } from './ButtonLive';
import { Story } from '@storybook/react';

export default {
  title: 'ButtonLive',
  component: ButtonLive,
};

const Template = (args) => <ButtonLive {...args} />;

export const Default = Template.bind({});
Default.args = {};
