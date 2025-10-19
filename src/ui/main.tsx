import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Beehive from './Beehive.tsx'
import EXAMPLE_HIVE_DOC from '../nodes/EXAMPLE_HIVE_DOC.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Beehive hiveDoc={EXAMPLE_HIVE_DOC} />
  </StrictMode>,
)
