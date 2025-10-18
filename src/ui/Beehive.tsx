import { useMemo } from 'react'
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow'
import type { Edge, Node } from 'reactflow'
import 'reactflow/dist/style.css'
import './Beehive.css'

type HiveNode = Node<{ label: string }>

const hiveNodes: HiveNode[] = [
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
]

const hiveEdges: Edge[] = [
  { id: 'queen-worker-a', source: 'queen', target: 'worker-a' },
  { id: 'queen-worker-b', source: 'queen', target: 'worker-b' },
  { id: 'worker-a-scout', source: 'worker-a', target: 'scout' },
  { id: 'worker-b-scout', source: 'worker-b', target: 'scout' },
]

function Beehive() {
  const nodes = useMemo(() => hiveNodes, [])
  const edges = useMemo(() => hiveEdges, [])

  return (
    <div className="beehive-flow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <MiniMap />
        <Controls />
        <Background gap={16} size={1} />
      </ReactFlow>
    </div>
  )
}

export default Beehive
