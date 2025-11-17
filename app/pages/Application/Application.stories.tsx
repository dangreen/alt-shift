import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import { $applications, $loading } from '~/stores/application'
import { navigation } from '~/stores/router'
import { Application } from './Application'

const meta: Meta<typeof Application> = {
  title: 'Pages/Application',
  component: Application,
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
        letter: 'Dear Apple Team,\n\nI am writing to express my interest in the Product Manager position.\n\nMy experience in the realm combined with my skills in HTML, CSS, JavaScript, Leadership make me a strong candidate for this role.\n\nLooking for an experienced product manager to lead our new initiatives...\n\nI am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.\n\nThank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.',
        createdAt: Date.now()
      }])
    }, [])

    return <Story/>
  }]
}

export default meta

type Story = StoryObj<typeof Application>

export const Default: Story = {
  decorators: [(Story) => {
    useEffect(() => {
      navigation.replace('/application/new')
    }, [])

    return <Story/>
  }]
}

export const WithData: Story = {
  decorators: [(Story) => {
    useEffect(() => {
      navigation.replace('/application/MOCK_ID')
    }, [])

    return <Story/>
  }]
}

export const Loading: Story = {
  decorators: [(Story) => {
    useEffect(() => {
      navigation.replace('/application/MOCK_ID')
      $loading(true)

      return () => {
        $loading(false)
      }
    }, [])

    return <Story/>
  }]
}
