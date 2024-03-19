import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Typography from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'UI-kit/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    as: 'h2',
    children: 'Beautiful heading',
    size: 'lg',
    color: 'primary',
    weight: 'medium',
  },
}
