import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps, ColorButton, ColorIconButton, FabButton, IconButton } from './Button'
import { ButtonMock } from './Buttons.mock'

const meta: Meta<ButtonProps> = {
  title: 'Buttons/Button',
  component: Button,
}

export default meta

type Story = StoryObj<ButtonProps>

export const ButtonOne: Story = {
  args: ButtonMock,
  name: 'Button',
  tags: ['button', 'simple-button', 'ui'],
  render: (args) => <Button {...args} />,
}

export const ButtonTwo: Story = {
  args: ButtonMock,
  name: 'ColorIconButton',
  tags: ['button', 'icon-button', 'color-button'],
  render: (args) => <ColorIconButton {...args} />,
}

export const ButtonThree: Story = {
  args: ButtonMock,
  name: 'ColorButton',
  tags: ['button', 'color-button'],
  render: (args) => <ColorButton {...args} />,
}

export const ButtonFour: Story = {
  args: ButtonMock,
  name: 'IconButton',
  tags: ['button', 'icon-button'],
  render: (args) => <IconButton {...args} />,
}

export const ButtonFive: Story = {
  args: ButtonMock,
  name: 'FabButton',
  tags: ['button', 'fab-button'],
  render: (args) => <FabButton {...args} />,
}
