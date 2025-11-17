import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import { $applications } from '~/stores/application'
import { Layout } from './Layout'

const meta: Meta<typeof Layout> = {
  title: 'Pages/Layout',
  component: Layout,
  parameters: {
    layout: 'padded'
  }
}

export default meta

type Story = StoryObj<typeof Layout>

export const Default: Story = {
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

export const Empty: Story = {
  decorators: [(Story) => {
    useEffect(() => {
      $applications([])
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
          title: 'Senior Frontend Developer',
          company: 'TechCorp',
          skills: 'React, TypeScript, CSS',
          details: 'Looking for a senior frontend position with focus on modern web technologies.',
          letter: 'Dear Hiring Manager,\n\nI am writing to express my interest in the Senior Frontend Developer position at TechCorp.',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_2',
          title: 'Product Designer',
          company: 'DesignStudio',
          skills: 'Figma, UI/UX',
          details: 'Seeking a product designer role to create beautiful user experiences.',
          letter: 'Dear Hiring Team,\n\nI am excited to apply for the Product Designer position at DesignStudio.',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_3',
          title: 'Full Stack Engineer',
          company: 'StartupXYZ',
          skills: 'Node.js, React, PostgreSQL',
          details: 'Full stack role at a fast-growing startup.',
          letter: 'Hello,\n\nI am applying for the Full Stack Engineer position at StartupXYZ.',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_4',
          title: 'Backend Developer',
          company: 'DataCorp',
          skills: 'Python, Django, PostgreSQL',
          details: 'Backend position focused on data processing.',
          letter: 'Dear Recruiter,\n\nI am interested in the Backend Developer role at DataCorp.',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_5',
          title: 'DevOps Engineer',
          company: 'CloudTech',
          skills: 'AWS, Docker, Kubernetes',
          details: 'DevOps position for cloud infrastructure.',
          letter: 'Hello,\n\nI would like to apply for the DevOps Engineer position at CloudTech.',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_6',
          title: 'Mobile Developer',
          company: 'AppStudio',
          skills: 'React Native, iOS, Android',
          details: 'Mobile development role for cross-platform apps.',
          letter: 'Dear Team,\n\nI am writing to apply for the Mobile Developer position at AppStudio.',
          createdAt: Date.now()
        }
      ])
    }, [])

    return <Story/>
  }]
}
