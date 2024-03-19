import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

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
