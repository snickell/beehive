import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'

import EXAMPLE_HIVE_DOC, {
  DEFAULT_JS_SNIPPET,
} from '../nodes/EXAMPLE_HIVE_DOC'
import Beehive from './Beehive.svelte'

const renderWithDimensions = () => {
  const wrapper = document.createElement('div')
  wrapper.style.width = '1024px'
  wrapper.style.height = '768px'
  document.body.appendChild(wrapper)

  return render(
    Beehive,
    {
      target: wrapper,
      props: { hiveDoc: EXAMPLE_HIVE_DOC },
    },
    { baseElement: wrapper },
  )
}

describe('Beehive', () => {
  it('renders the Beehive', () => {
    renderWithDimensions()

    expect(screen.getByText('Queen Bee')).toBeInTheDocument()
  })

  it('renders an editable JavaScript node', () => {
    renderWithDimensions()

    const [editor] = screen.getAllByRole('textbox', {
      name: /javascript code/i,
    })

    expect(editor).toHaveValue(DEFAULT_JS_SNIPPET)

    fireEvent.input(editor, {
      target: { value: 'console.log("Buzz!");' },
    })

    expect(editor).toHaveValue('console.log("Buzz!");')
  })
})
