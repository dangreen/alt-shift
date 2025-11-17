import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { LetterCard } from '../LetterCard'
import { LetterCardContent } from '../LetterCard/LetterCardContent'
import { LetterCardFooter } from '../LetterCard/LetterCardFooter'
import { LetterCardGrid } from './LetterCardGrid'

const meta: Meta<typeof LetterCardGrid> = {
  title: 'UIKit/LetterCardGrid',
  component: LetterCardGrid,
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof LetterCardGrid>

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export const Default: Story = {
  args: {
    style: {
      maxWidth: '1120px',
      margin: '0 auto'
    },
    children: (
      <>
        <LetterCard>
          <LetterCardContent
            maxLines={6}
            value={text}
          />
          <LetterCardFooter>
            <Button
              icon={<Icon name='trash'/>}
              size='md'
              variant='subtle'
            >
              Delete
            </Button>
            <Button
              icon={<Icon name='copy'/>}
              size='md'
              variant='subtle'
            >
              Copy
            </Button>
          </LetterCardFooter>
        </LetterCard>
        <LetterCard>
          <LetterCardContent
            maxLines={6}
            value={text}
          />
          <LetterCardFooter>
            <Button
              icon={<Icon name='trash'/>}
              size='md'
              variant='subtle'
            >
              Delete
            </Button>
            <Button
              icon={<Icon name='copy'/>}
              size='md'
              variant='subtle'
            >
              Copy
            </Button>
          </LetterCardFooter>
        </LetterCard>
        <LetterCard>
          <LetterCardContent
            maxLines={6}
            value={text}
          />
          <LetterCardFooter>
            <Button
              icon={<Icon name='trash'/>}
              size='md'
              variant='subtle'
            >
              Delete
            </Button>
            <Button
              icon={<Icon name='copy'/>}
              size='md'
              variant='subtle'
            >
              Copy
            </Button>
          </LetterCardFooter>
        </LetterCard>
        <LetterCard>
          <LetterCardContent
            maxLines={6}
            value={text}
          />
          <LetterCardFooter>
            <Button
              icon={<Icon name='trash'/>}
              size='md'
              variant='subtle'
            >
              Delete
            </Button>
            <Button
              icon={<Icon name='copy'/>}
              size='md'
              variant='subtle'
            >
              Copy
            </Button>
          </LetterCardFooter>
        </LetterCard>
      </>
    )
  }
}

export const SingleCard: Story = {
  args: {
    ...Default.args,
    style: {
      maxWidth: '400px',
      margin: '0 auto'
    }
  }
}
