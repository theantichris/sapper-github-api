import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import index from '../../src/routes'

test('it displays correct header', () => {
  const { getByText } = render(index)

  expect(getByText('Great success!')).toBeInTheDocument()
})