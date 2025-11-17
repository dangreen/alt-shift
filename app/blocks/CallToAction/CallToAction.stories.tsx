import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import { $applications } from '~/stores/application'
import { navigation } from '~/stores/router'
import { CallToAction } from './CallToAction'

const meta: Meta<typeof CallToAction> = {
  title: 'Blocks/CallToAction',
  component: CallToAction,
  decorators: [(Story) => {
    useEffect(() => {
      navigation.replace('/application/MOCK_ID_8')

      $applications([
        {
          id: 'MOCK_ID_8',
          title: 'Product Manager',
          company: 'Apple',
          skills: 'Leadership',
          details: 'Details...',
          letter: 'Letter...',
          createdAt: Date.now()
        },
        {
          id: 'MOCK_ID_9',
          title: 'Designer',
          company: 'Google',
          skills: 'Figma',
          details: 'Details...',
          letter: 'Letter...',
          createdAt: Date.now()
        }
      ])
    }, [])

    return <Story/>
  }]
}

export default meta

type Story = StoryObj<typeof CallToAction>

export const Default: Story = {
  args: {
    style: {
      maxWidth: '1120px',
      margin: '0 auto'
    }
  }
}
