import type { Meta, StoryObj } from '@storybook/react'
import { Steps } from './Steps'

const meta: Meta<typeof Steps> = {
  title: 'UIKit/Steps',
  component: Steps,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg']
    }
  }
}

export default meta
type Story = StoryObj<typeof Steps>

export const Default: Story = {
  args: {
    value: 2,
    max: 5,
    size: 'md'
  }
}

export const LgSize: Story = {
  args: {
    value: 3,
    max: 5,
    size: 'lg'
  }
}

export const AllFilled: Story = {
  args: {
    value: 5,
    max: 5,
    size: 'lg'
  }
}

export const Empty: Story = {
  args: {
    value: 0,
    max: 5,
    size: 'md'
  }
}
