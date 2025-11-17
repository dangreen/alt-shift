import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'UIKit/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...'
  }
}

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello world\nMultiple lines',
    placeholder: 'Enter text...'
  }
}

export const Invalid: Story = {
  args: {
    placeholder: 'Invalid input',
    defaultValue: 'Invalid value',
    minLength: 100
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true
  }
}
