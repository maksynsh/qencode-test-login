import type { Meta, StoryObj } from '@storybook/react'

import Divider from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'UI-kit/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
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
    label: 'Divider',
  },
}
