import React from 'react';

import PageHeader from './pageHeader';

export default {
  title: 'Example/PageHeader',
  component: PageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
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
