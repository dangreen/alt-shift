import type { Meta, StoryObj } from '@storybook/react'
import { Thinker } from './Thinker'

const meta: Meta<typeof Thinker> = {
  title: 'UIKit/Thinker',
  component: Thinker,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Loading...'
  }
}

export default meta
type Story = StoryObj<typeof Thinker>

export const Default: Story = {}
