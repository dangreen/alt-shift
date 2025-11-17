import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import { $applications } from '~/stores/application'
import { ApplicationsProgress } from './ApplicationsProgress'

const meta: Meta<typeof ApplicationsProgress> = {
  title: 'Blocks/ApplicationsProgress',
  component: ApplicationsProgress,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof ApplicationsProgress>

export const Empty: Story = {
  decorators: [(Story) => {
    useEffect(() => {
      $applications([])
    }, [])

    return <Story/>
  }]
}

export const WithProgress: Story = {
  decorators: [(Story) => {
    useEffect(() => {
      $applications([
        {
          id: 'MOCK_ID_1',
          title: 'Developer',
          company: 'Company',
          skills: 'Skills',
          details: 'Details',
          letter: 'Letter',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_2',
          title: 'Designer',
          company: 'Company',
          skills: 'Skills',
          details: 'Details',
          letter: 'Letter',
          createdAt: Date.now()
        }
      ])
    }, [])

    return <Story/>
  }]
}

export const Complete: Story = {
  decorators: [(Story) => {
    useEffect(() => {
      $applications([
        {
          id: 'MOCK_ID_1',
          title: 'Developer',
          company: 'Company',
          skills: 'Skills',
          details: 'Details',
          letter: 'Letter',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_2',
          title: 'Designer',
          company: 'Company',
          skills: 'Skills',
          details: 'Details',
          letter: 'Letter',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_3',
          title: 'Manager',
          company: 'Company',
          skills: 'Skills',
          details: 'Details',
          letter: 'Letter',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_4',
          title: 'Engineer',
          company: 'Company',
          skills: 'Skills',
          details: 'Details',
          letter: 'Letter',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_5',
          title: 'Analyst',
          company: 'Company',
          skills: 'Skills',
          details: 'Details',
          letter: 'Letter',
          createdAt: Date.now()
        }
      ])
    }, [])

    return <Story/>
  }]
}
