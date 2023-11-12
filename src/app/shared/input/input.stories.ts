import type { Meta } from '@storybook/angular';
import { StoryObj } from '@storybook/angular';

import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Molecules/Input',
  component: InputComponent,
  tags: ['autodocs'],
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    type: {
      control: 'select',
    },
    readonly: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const InputWithLabel: Story = {
  args: {
    label: 'Input',
    name: 'input-with-label',
    placeholder: 'Input with label',
  },
};

export const InputRequiredWithLabel: Story = {
  args: {
    label: 'Input Required',
    name: 'input-with-label',
    required: true,
    placeholder: 'Input with label',
  },
};

export const InputWithoutLabel: Story = {
  args: {
    hasLabel: false,
    label: 'Input without label',
    placeholder: 'Input without label',
    name: 'input-without-label',
  },
};

export const InputReadonly: Story = {
  args: {
    label: 'Input',
    name: 'input-readonly',
    placeholder: 'Input readonly',
    readonly: true,
  },
};

export const InputNumber: Story = {
  args: {
    label: 'Input',
    name: 'input-number',
    placeholder: 'Input number',
    type: 'number',
  },
};

export const InputEmail: Story = {
  args: {
    label: 'Input',
    name: 'input-email',
    placeholder: 'Input email',
    type: 'email',
  },
};

export const InputPassword: Story = {
  args: {
    label: 'Input',
    name: 'input-password',
    placeholder: 'Input password',
    type: 'password',
  },
};
