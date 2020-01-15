import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import User from '../../src/components/User.svelte'

it('displays avatar', () => {
  const { getByAltText } = render(User, { username: 'theantichris', avatar: 'https://image.test' })

  expect(getByAltText(`theantichris's avatar`).src).toBe('https://image.test/')
})

it('displays username', () => {
  const { getByText } = render(User, { username: 'theantichris', avatar: 'https://image.text' })

  expect(getByText('theantichris')).toBeInTheDocument()
})