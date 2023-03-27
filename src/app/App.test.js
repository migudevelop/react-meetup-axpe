import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import App from 'App'

test('should be render the initial page', async () => {
  render(<App />)
  const text = await waitFor(() => screen.getByText(/React Meetups/i))
  expect(text).toBeInTheDocument()
})
