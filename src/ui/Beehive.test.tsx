import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Beehive from './Beehive'
import { JS } from '../nodes/js'

describe('Beehive', () => {
  it('renders the Beehive', () => {
    render(
      <div style={{ width: '1024px', height: '768px' }}>
        <Beehive />
      </div>,
    )

    expect(screen.getByText('Queen Bee')).toBeInTheDocument()
  })

  it('renders an editable JavaScript node', () => {
    render(
      <div style={{ width: '1024px', height: '768px' }}>
        <Beehive />
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
