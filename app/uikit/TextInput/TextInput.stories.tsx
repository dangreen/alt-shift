import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'UIKit/TextInput',
  component: TextInput,
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
type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...'
  }
}

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello world',
    placeholder: 'Enter text...'
  }
}

export const Invalid: Story = {
  args: {
    placeholder: 'Invalid input',
    defaultValue: 'Invalid value',
    pattern: '^[A-Za-z]+$' // Only letters allowed
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}
