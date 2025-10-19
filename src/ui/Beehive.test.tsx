import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { JS } from '../nodes/js'
import EXAMPLE_HIVE_DOC from '../nodes/EXAMPLE_HIVE_DOC'
import Beehive from './Beehive'

describe('Beehive', () => {
  it('renders the Beehive', () => {
    render(
      <div style={{ width: '1024px', height: '768px' }}>
        <Beehive hiveDoc={EXAMPLE_HIVE_DOC} />
      </div>,
    )

    expect(screen.getByText('Queen Bee')).toBeInTheDocument()
  })

  it('renders an editable JavaScript node', () => {
    render(
      <div style={{ width: '1024px', height: '768px' }}>
        <Beehive hiveDoc={EXAMPLE_HIVE_DOC} />
      </div>,
    )

    const [editor] = screen.getAllByRole('textbox', {
      name: /javascript code/i,
    })

    expect(editor).toHaveValue(JS.DEFAULT_SNIPPET)

    fireEvent.change(editor, {
      target: { value: 'console.log("Buzz!");' },
    })

    expect(editor).toHaveValue('console.log("Buzz!");')
  })
})
