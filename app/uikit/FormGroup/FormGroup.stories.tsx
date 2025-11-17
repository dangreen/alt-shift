import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '../TextArea'
import { TextInput } from '../TextInput'
import { FormGroup } from './FormGroup'

const meta: Meta<typeof FormGroup> = {
  title: 'UIKit/FormGroup',
  component: FormGroup,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof FormGroup>

export const Default: Story = {
  args: {
    controlId: 'name-input',
    label: 'Name',
    children: (
      <TextInput
        id='name-input'
        placeholder='Enter your name'
      />
    )
  }
}

export const WithTextArea: Story = {
  args: {
    controlId: 'description-textarea',
    label: 'Description',
    description: 'Maximum 500 characters',
    children: (
      <TextArea
        id='description-textarea'
        placeholder='Enter description'
      />
    )
  }
}

export const Invalid: Story = {
  args: {
    controlId: 'description-textarea',
    label: 'Description',
    description: 'Maximum 500 characters',
    children: (
      <TextArea
        id='description-textarea'
        placeholder='Enter description'
        defaultValue='Invalid value'
        minLength={100}
      />
    )
  }
}
