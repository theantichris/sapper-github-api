import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import index from '../../../src/routes/users'

it('gets GitHub users', () => {
  process.env.SAPPER_APP_GITHUB_CLIENT_ID = 'abc123'
  process.env.SAPPER_APP_GITHUB_CLIENT_SECRET = 'def456'

  fetch.mockResponseOnce(JSON.stringify(
    [
      {
        "login": "theantichris",
        "avatar_url": "https://avatars1.githubusercontent.com/u/1486502?v=4"
      }
    ]
  ))

  render(index)

  expect(fetch.mock.calls.length).toBe(1)
  expect(fetch.mock.calls[0][0]).toBe(`https://api.github.com/users?client_id=abc123&client_secret=def456`)
})