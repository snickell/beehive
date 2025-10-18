import '@testing-library/jest-dom/vitest'
import { beforeEach } from 'vitest'

import { mockReactFlow } from './mockReactFlow'

// React Flow requires some browser APIs not available in JSDOM, so we setup
// the mock implementations recommended by the React Flow docs:
mockReactFlow()

// Treat any console.error() and console.warn() calls as test failures.
beforeEach(() => {
  const err = console.error
  const warn = console.warn

  console.error = (...args) => {
    err(...args)
    throw new Error('console.error: ' + args.join(' '))
  }

  console.warn = (...args) => {
    warn(...args)
    throw new Error('console.warn: ' + args.join(' '))
  }
})