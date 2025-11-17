import type { Meta, StoryObj } from '@storybook/react'
import { Paper } from './Paper'

const meta: Meta<typeof Paper> = {
  title: 'UIKit/Paper',
  component: Paper,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['', 'success']
    }
  }
}

export default meta
type Story = StoryObj<typeof Paper>

export const Default: Story = {
  args: {
    children: 'This is a default paper component with some text content.'
  }
}

export const Success: Story = {
  args: {
    color: 'success',
    children: 'This is a success paper component with some text content.'
  }
}

export const WithLongContent: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  }
}
