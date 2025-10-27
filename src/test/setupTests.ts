import '@testing-library/jest-dom/vitest'
import { beforeEach } from 'vitest'

import { mockFlowEnvironment } from './mockFlowEnvironment'

// XY Flow requires some browser APIs not available in JSDOM, so we setup
// the mock implementations recommended by the XY Flow docs:
mockFlowEnvironment()

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
