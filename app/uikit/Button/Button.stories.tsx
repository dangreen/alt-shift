import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '../Icon'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UIKit/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'subtle']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    color: {
      control: 'select',
      options: ['', 'danger']
    },
    disabled: {
      control: 'boolean'
    },
    block: {
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button text'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Delete',
    icon: <Icon name='trash'/>
  }
}

export const IconOnly: Story = {
  args: {
    'icon': <Icon name='plus'/>,
    'aria-label': 'Add item'
  }
}

export const PrimaryWithIcon: Story = {
  args: {
    children: 'Copy',
    variant: 'primary',
    icon: <Icon name='copy'/>
  }
}

export const IconRight: Story = {
  args: {
    children: 'Next',
    icon: <Icon name='plus'/>,
    iconAlign: 'right'
  }
}

export const AsLink: Story = {
  args: {
    children: 'Open Link',
    as: 'a',
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}
