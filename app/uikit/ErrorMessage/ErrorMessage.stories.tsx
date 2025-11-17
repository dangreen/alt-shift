import type { Meta, StoryObj } from '@storybook/react'
import { ErrorMessage } from './ErrorMessage'

const meta: Meta<typeof ErrorMessage> = {
  title: 'UIKit/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof ErrorMessage>

export const Default: Story = {
  args: {
    children: 'This field is required'
  }
}

export const LongMessage: Story = {
  args: {
    children: 'Details cannot exceed 1200 characters. Please shorten your text.'
  }
}

export const Empty: Story = {
  args: {
    children: ''
  }
}
