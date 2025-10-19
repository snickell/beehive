import type { HiveDoc } from "./HiveDoc"

export const DEFAULT_JS_SNIPPET = `function greet(name) {
  return \`Hello, \${name}!\`
}`

const EXAMPLE_HIVE_DOC : HiveDoc = {
  version: 1,
  nodes: [
    {
      id: 'queen',
      position: { x: 0, y: 0 },
      data: { label: 'Queen Bee' },
    },
    {
      id: 'worker-a',
      position: { x: -180, y: 180 },
      data: { label: 'Worker A' },
    },
    {
      id: 'worker-b',
      position: { x: 180, y: 180 },
      data: { label: 'Worker B' },
    },
    {
      id: 'scout',
      position: { x: 0, y: 340 },
      data: { label: 'Scout' },
    },
    {
      id: 'hive',
      position: { x: -280, y: 140 },
      type: 'hive',
      style: { width: 220, height: 220 },
      data: {
        hiveDoc: {
          version: 1,
          nodes: [
            {
              id: 'baby-bee',
              position: { x: 0, y: 0 },
              data: { label: 'Baby Bee' },
            },
          ],
          edges: [],
        } as HiveDoc,
      }
    },
    {
      id: 'script',
      position: { x: 280, y: 140 },
      type: 'js',
      data: { code: DEFAULT_JS_SNIPPET },
    },
  ],
  edges: [
    { id: 'queen-worker-a', source: 'queen', target: 'worker-a' },
    { id: 'queen-worker-b', source: 'queen', target: 'worker-b' },
    { id: 'worker-a-scout', source: 'worker-a', target: 'scout' },
    { id: 'worker-b-scout', source: 'worker-b', target: 'scout' },
  ]
}

export default EXAMPLE_HIVE_DOC
