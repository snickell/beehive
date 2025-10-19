import { JS } from "./js"

export default {
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
    JS.createNode({
      id: 'script',
      position: { x: 280, y: 140 },
    }),
  ],
  edges: [
    { id: 'queen-worker-a', source: 'queen', target: 'worker-a' },
    { id: 'queen-worker-b', source: 'queen', target: 'worker-b' },
    { id: 'worker-a-scout', source: 'worker-a', target: 'scout' },
    { id: 'worker-b-scout', source: 'worker-b', target: 'scout' },
  ]
}