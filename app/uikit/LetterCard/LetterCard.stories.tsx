import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { LetterCard } from './LetterCard'
import { LetterCardContent } from './LetterCardContent'
import { LetterCardFooter } from './LetterCardFooter'

const meta: Meta<typeof LetterCard> = {
  title: 'UIKit/LetterCard',
  component: LetterCard,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof LetterCard>

export const Default: Story = {
  args: {
    style: {
      width: '500px',
      height: '600px'
    },
    children: (
      <>
        <LetterCardContent value={'Hello World!\nThis is a multi-line text.\nIt supports line breaks.'}/>
        <LetterCardFooter>
          <Button
            icon={<Icon name='trash'/>}
            size='sm'
            variant='subtle'
            color='danger'
          >
            Delete
          </Button>
          <Button
            icon={<Icon name='copy'/>}
            iconAlign='right'
            size='sm'
            variant='subtle'
          >
            Copy
          </Button>
        </LetterCardFooter>
      </>
    )
  }
}

export const WithPlaceholder: Story = {
  args: {
    style: {
      width: '500px',
      height: '600px'
    },
    children: (
      <>
        <LetterCardContent placeholder='No content available'/>
        <LetterCardFooter>
          <Button
            icon={<Icon name='copy'/>}
            iconAlign='right'
            size='sm'
            variant='subtle'
          >
            Copy
          </Button>
        </LetterCardFooter>
      </>
    )
  }
}

export const Short: Story = {
  args: {
    style: {
      width: '500px',
      height: '200px'
    },
    children: (
      <>
        <LetterCardContent value={`${'Line 1\n'.repeat(20)}Last line`}/>
        <LetterCardFooter>
          <Button
            icon={<Icon name='trash'/>}
            size='sm'
            variant='subtle'
            color='danger'
          >
            Delete
          </Button>
          <Button
            icon={<Icon name='copy'/>}
            iconAlign='right'
            size='sm'
            variant='subtle'
          >
            Copy
          </Button>
        </LetterCardFooter>
      </>
    )
  }
}

export const LongContent: Story = {
  args: {
    style: {
      width: '500px',
      height: '600px'
    },
    children: (
      <>
        <LetterCardContent value={`${'Line 1\n'.repeat(20)}Last line`}/>
        <LetterCardFooter>
          <Button
            icon={<Icon name='trash'/>}
            size='sm'
            variant='subtle'
            color='danger'
          >
            Delete
          </Button>
          <Button
            icon={<Icon name='copy'/>}
            iconAlign='right'
            size='sm'
            variant='subtle'
          >
            Copy
          </Button>
        </LetterCardFooter>
      </>
    )
  }
}

export const MaxLines: Story = {
  args: {
    style: {
      width: '500px'
    },
    children: (
      <>
        <LetterCardContent
          value={'Lorem ipsum. '.repeat(500)}
          maxLines={5}
        />
        <LetterCardFooter>
          <Button
            icon={<Icon name='trash'/>}
            size='sm'
            variant='subtle'
            color='danger'
          >
            Delete
          </Button>
          <Button
            icon={<Icon name='copy'/>}
            iconAlign='right'
            size='sm'
            variant='subtle'
          >
            Copy
          </Button>
        </LetterCardFooter>
      </>
    )
  }
}
