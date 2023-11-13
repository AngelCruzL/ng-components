import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { StorybookModule } from '../../config/storybook/storybook.module';
import { importProvidersFrom } from '@angular/core';

// TODO: Fix translations on storybook
const meta: Meta<ButtonComponent> = {
  title: 'Molecules/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    // moduleMetadata({
    //   imports: [StorybookModule],
    // }),
    applicationConfig({
      providers: [importProvidersFrom(StorybookModule)],
    }),
  ],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    type: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    labelKey: 'btn-primary',
    variant: 'primary',
  },
};

export const Accent: Story = {
  args: {
    labelKey: 'Accent',
    variant: 'accent',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    labelKey: 'Small',
    variant: 'primary',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    labelKey: 'Medium',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    labelKey: 'Large',
    variant: 'primary',
  },
};
