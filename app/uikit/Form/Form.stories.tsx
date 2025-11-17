import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { FormGroup } from '../FormGroup'
import { TextArea } from '../TextArea'
import { TextInput } from '../TextInput'
import { Form } from './Form'

const meta: Meta<typeof Form> = {
  title: 'UIKit/Form',
  component: Form,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Form>

export const Default: Story = {
  args: {
    style: {
      width: '400px'
    },
    children: (
      <>
        <FormGroup
          label='Name'
          controlId='name'
        >
          <TextInput
            id='name'
            placeholder='Enter your name'
          />
        </FormGroup>
        <FormGroup
          label='Email'
          controlId='email'
        >
          <TextInput
            id='email'
            type='email'
            placeholder='Enter your email'
          />
        </FormGroup>
        <FormGroup
          label='Message'
          description='Maximum 500 characters'
          controlId='message'
        >
          <TextArea
            id='message'
            placeholder='Enter your message'
          />
        </FormGroup>
        <Button
          type='submit'
          variant='primary'
          size='lg'
        >
          Submit
        </Button>
      </>
    )
  }
}
