import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import Nav from '../../src/components/Nav.svelte'

test('it shows correct navigation', () => {
  const { getByText } = render(Nav, { segment: '' })

  expect(getByText('home')).toBeInTheDocument()
  expect(getByText('users')).toBeInTheDocument()
  expect(getByText('about')).toBeInTheDocument()
})