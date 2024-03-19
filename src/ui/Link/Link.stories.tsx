import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Typography from '@ui/Typography'
import Link from './Link'

const meta: Meta<typeof Link> = {
  title: 'UI-kit/Link',
  component: Link,
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

export const Main: Story = {
  args: {
    children: (
      <Typography color="primary" weight="medium">
        Go to Github
      </Typography>
    ),
    to: 'http://github.com/',
  },
}
