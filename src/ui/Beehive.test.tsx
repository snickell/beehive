import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Beehive from './Beehive'

describe('Beehive', () => {
  it('renders the Beehive', () => {
    render(
      <div style={{ width: '1024px', height: '768px' }}>
        <Beehive />
      </div>,
    )

    expect(screen.getByText('Queen Bee')).toBeInTheDocument()
  })
})
