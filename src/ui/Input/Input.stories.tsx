import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI-kit/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text here...',
    width: '300px',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    width: '300px',
  },
}

export const Error: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter email',
    errorMessage: 'Email is required',
    width: '300px',
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter email',
    isDisabled: true,
    width: '300px',
  },
}
