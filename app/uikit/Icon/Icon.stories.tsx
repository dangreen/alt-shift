import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'UIKit/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    name: {
      control: 'select',
      options: ['copy', 'flower', 'home', 'plus', 'retry', 'trash']
    },
    width: {
      control: 'number'
    },
    height: {
      control: 'number'
    }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    name: 'copy'
  }
}
