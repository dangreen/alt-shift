import type { Meta, StoryObj } from '@storybook/react'
import type { Application } from '~/services/application.types'
import { ApplicationCard } from './ApplicationCard'

const meta: Meta<typeof ApplicationCard> = {
  title: 'Blocks/ApplicationCard',
  component: ApplicationCard,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof ApplicationCard>

const mockApplication: Application = {
  id: 'MOCK_ID',
  title: 'Senior Frontend Developer',
  company: 'TechCorp',
  skills: 'React, TypeScript, CSS',
  details: 'Looking for a senior frontend position with focus on modern web technologies.',
  letter: 'Dear Hiring Manager,\n\nI am writing to express my interest in the Senior Frontend Developer position at TechCorp. With my extensive experience in React, TypeScript, and CSS, I believe I would be a great fit for your team.\n\nI have spent the last 5 years building modern web applications and leading frontend teams. My expertise includes creating scalable component libraries, implementing complex state management solutions, and optimizing application performance.\n\nI am excited about the opportunity to contribute to TechCorp and help build innovative products.\n\nBest regards',
  createdAt: Date.now()
}

export const Default: Story = {
  args: {
    application: mockApplication,
    style: {
      width: '400px'
    }
  }
}

export const ShortLetter: Story = {
  args: {
    application: {
      ...mockApplication,
      letter: 'Short cover letter content that fits in a few lines.'
    },
    style: {
      width: '400px'
    }
  }
}

export const LongLetter: Story = {
  args: {
    application: {
      ...mockApplication,
      letter: 'Dear Hiring Manager,\n\nI am writing to express my strong interest in the Senior Frontend Developer position at TechCorp. With over 8 years of experience in frontend development and a proven track record of delivering high-quality web applications, I am confident in my ability to contribute significantly to your team.\n\nThroughout my career, I have specialized in React, TypeScript, and modern CSS technologies. I have led multiple projects from conception to deployment, working closely with cross-functional teams to deliver products that exceed user expectations. My experience includes building scalable component libraries, implementing complex state management solutions using Redux and MobX, and optimizing application performance for millions of users.\n\nIn my current role at CompanyXYZ, I have been responsible for architecting and implementing the frontend infrastructure for our flagship product, which serves over 2 million active users monthly. I have also mentored junior developers and established best practices for code quality and testing.\n\nI am particularly excited about TechCorp\'s commitment to innovation and your focus on creating user-centric products. I believe my skills and experience align perfectly with your needs, and I would welcome the opportunity to discuss how I can contribute to your team\'s success.\n\nThank you for considering my application. I look forward to hearing from you.\n\nBest regards'
    },
    style: {
      width: '400px'
    }
  }
}
