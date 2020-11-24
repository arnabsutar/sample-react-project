import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import PageHeader from '.';

export default {
  title: 'Example/PageHeader',
  component: PageHeader,
  decorators: [withA11y],
};

const Template = (args) => <PageHeader {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  primaryHeading: 'Page',
  secondaryHeading: 'Title',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primaryHeading: 'Certification',
  secondaryHeading: 'Listing',
};
