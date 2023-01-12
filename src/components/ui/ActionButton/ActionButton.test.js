import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ActionButton from './index'

test('should be render the ActionButton component with text', async () => {
  render(<ActionButton>Test</ActionButton>)
  const text = await waitFor(() => screen.getByText(/Test/i))
  expect(text).toBeInTheDocument()
})

test('should be render the ActionButton component with className', async () => {
  const { container } = render(
    <ActionButton className="test">Test</ActionButton>
  )
  expect(container.getElementsByClassName('test').length).toBe(1)
})

test('should be clicked ActionButton', async () => {
  const handleOnClick = jest.fn()
  render(<ActionButton handleOnClick={handleOnClick}>Test</ActionButton>)
  const button = await waitFor(() => screen.getByText(/Test/i))
  await fireEvent.click(button)
  expect(handleOnClick).toHaveBeenCalled()
})
