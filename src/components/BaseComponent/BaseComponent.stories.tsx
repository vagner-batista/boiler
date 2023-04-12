import { Meta, StoryObj } from '@storybook/react'

import BaseComponent, { IBaseComponent } from './BaseComponent'
import { mockBaseComponentProps } from './BaseComponent.mocks'

const meta: Meta<IBaseComponent> = {
  title: 'Components/BaseComponent',
  component: BaseComponent,
}

export default meta

type Story = StoryObj<IBaseComponent>

export const Base: Story = {
  args: mockBaseComponentProps.base,
  name: 'BaseComponent',
  storyName: 'BaseComponentStory',
  tags: ['BaseComponent', 'component-template'],
  render: (args) => <BaseComponent {...args} />,
}
