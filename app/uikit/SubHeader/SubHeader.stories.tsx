import type { Meta, StoryObj } from '@storybook/react'
import typography from '~/uikit/typography.module.css'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { SubHeader } from './SubHeader'

const meta: Meta<typeof SubHeader> = {
  title: 'UIKit/SubHeader',
  component: SubHeader,
  parameters: {
    layout: 'padded'
  }
}

export default meta
type Story = StoryObj<typeof SubHeader>

export const Default: Story = {
  args: {
    title: <h1 className={typography.h1}>Page Title</h1>,
    children: (
      <Button variant='primary'>
        Create
      </Button>
    )
  }
}

export const WithMultipleActions: Story = {
  args: {
    title: <h1 className={typography.h1}>Projects</h1>,
    children: (
      <>
        <Button variant='default'>
          Export
        </Button>
        <Button variant='primary'>
          Create Project
        </Button>
      </>
    )
  }
}

export const WithIconButton: Story = {
  args: {
    title: <h1 className={typography.h1}>Settings</h1>,
    children: (
      <Button
        variant='primary'
        icon={<Icon name='plus'/>}
      >
        Add New
      </Button>
    )
  }
}

export const WithoutActions: Story = {
  args: {
    title: <h1 className={typography.h1}>Dashboard</h1>
  }
}

export const WithH2Title: Story = {
  args: {
    title: <h1 className={typography.h2}>Section Title</h1>,
    children: (
      <Button
        variant='primary'
      >
        Create
      </Button>
    )
  }
}
