import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import { navigation } from '~/stores/router'
import { $applications } from '~/stores/application'
import { ApplicationForm } from './ApplicationForm'

const meta: Meta<typeof ApplicationForm> = {
  title: 'Blocks/ApplicationForm',
  component: ApplicationForm,
  parameters: {
    layout: 'padded'
  },
  decorators: [(Story) => {
    useEffect(() => {
      $applications([{
        id: 'MOCK_ID',
        title: 'Product Manager',
        company: 'Apple',
        skills: 'HTML, CSS, JavaScript, Leadership',
        details: 'Looking for an experienced product manager to lead our new initiatives...',
        letter: 'Dear Hiring Manager,\n\nI am excited to apply for the Product Manager position at Apple. With over 5 years of experience in product management and a strong background in technology, I am confident in my ability to contribute to your team...\n\nSincerely,\nJohn Doe',
        createdAt: Date.now()
      }])
    }, [])

    return <Story/>
  }]
}

export default meta
type Story = StoryObj<typeof ApplicationForm>

export const Default: Story = {
  args: {
    style: {
      maxWidth: 600,
      margin: '0 auto'
    }
  },
  decorators: [(Story) => {
    useEffect(() => {
      navigation.replace('/application/new')
    }, [])

    return <Story/>
  }]
}

export const Filled: Story = {
  args: {
    style: {
      maxWidth: 600,
      margin: '0 auto'
    }
  },
  decorators: [(Story) => {
    useEffect(() => {
      navigation.replace('/application/MOCK_ID')
    }, [])

    return <Story/>
  }]
}
