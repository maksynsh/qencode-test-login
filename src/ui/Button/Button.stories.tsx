import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { GithubIcon } from '@ui/Icon'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI-kit/Button',
  component: Button,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary',
  },
}

export const IconButton: Story = {
  args: {
    icon: <GithubIcon />,
    variant: 'secondary',
    label: 'Github',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'secondary',
    label: 'Disabled',
    isDisabled: true,
  },
}

export const Small: Story = {
  args: {
    variant: 'primary',
    label: 'Small',
    size: 'small',
  },
}
