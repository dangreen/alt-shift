import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import { $applications } from '~/stores/application'
import { ApplicationsGrid } from './ApplicationsGrid'

const meta: Meta<typeof ApplicationsGrid> = {
  title: 'Blocks/ApplicationsGrid',
  component: ApplicationsGrid,
  parameters: {
    layout: 'padded'
  },
  decorators: [(Story) => {
    useEffect(() => {
      $applications([
        {
          id: 'MOCK_ID_1',
          title: 'Senior Frontend Developer',
          company: 'TechCorp',
          skills: 'React, TypeScript, CSS',
          details: 'Looking for a senior frontend position with focus on modern web technologies.',
          letter: 'Dear Hiring Manager,\n\nI am writing to express my interest in the Senior Frontend Developer position at TechCorp. With my extensive experience in React, TypeScript, and CSS, I believe I would be a great fit for your team.\n\nBest regards',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_2',
          title: 'Product Designer',
          company: 'DesignStudio',
          skills: 'Figma, UI/UX',
          details: 'Seeking a product designer role to create beautiful user experiences.',
          letter: 'Dear Hiring Team,\n\nI am excited to apply for the Product Designer position at DesignStudio. My passion for creating intuitive and beautiful user interfaces aligns perfectly with your company\'s mission.\n\nThank you',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_3',
          title: 'Full Stack Engineer',
          company: 'StartupXYZ',
          skills: 'Node.js, React, PostgreSQL',
          details: 'Full stack role at a fast-growing startup.',
          letter: 'Hello,\n\nI am applying for the Full Stack Engineer position at StartupXYZ. I have experience building scalable web applications from frontend to backend.\n\nLooking forward to hearing from you',
          createdAt: Date.now()
        }
      ])
    }, [])

    return <Story/>
  }]
}

export default meta

type Story = StoryObj<typeof ApplicationsGrid>

export const Default: Story = {}
