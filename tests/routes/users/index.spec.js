import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import index from '../../../src/routes/users'
import flushPromises from 'flush-promises'

beforeEach(() => {
  process.env.SAPPER_APP_GITHUB_CLIENT_ID = 'abc123'
  process.env.SAPPER_APP_GITHUB_CLIENT_SECRET = 'def456'

  fetch.mockResponseOnce(JSON.stringify(
    [
      {
        login: 'theantichris',
        avatar_url: 'https://image.test'
      }
    ]
  ))
})

it('gets GitHub users', () => {
  render(index)

  expect(fetch.mock.calls.length).toBe(1)
  expect(fetch.mock.calls[0][0]).toBe('https://api.github.com/users?client_id=abc123&client_secret=def456')
})

it('shows user list', async () => {
  const { getByText, getByAltText } = render(index)

  await flushPromises()

  expect(getByAltText(`theantichris's avatar`).src).toBe('https://image.test/')
  expect(getByText('theantichris')).toBeInTheDocument()
})