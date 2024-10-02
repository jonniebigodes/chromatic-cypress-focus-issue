import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

import { LoginForm } from './AuthForm'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Components/AuthForm',
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const WithFocusState: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Fill form fields before focusing on the submit button
    await userEvent.type(canvas.getByLabelText('email'), 'test@email.com')
    await userEvent.type(canvas.getByLabelText('password'), 'KC@2N6^?vsV+)w1t')

    // Emulates the user focusing on the submit button
    const SubmitButton = canvas.getByRole('button')

    await SubmitButton.focus()
    await expect(SubmitButton).toHaveFocus()
  },
}
