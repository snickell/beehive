import { useCallback, useState } from 'react'
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type Edge,
  type Node,
  type NodeChange,
  type EdgeChange,
  type Connection,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './Beehive.css'

const hiveNodes = [
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

const hiveEdges= [
  { id: 'queen-worker-a', source: 'queen', target: 'worker-a' },
  { id: 'queen-worker-b', source: 'queen', target: 'worker-b' },
  { id: 'worker-a-scout', source: 'worker-a', target: 'scout' },
  { id: 'worker-b-scout', source: 'worker-b', target: 'scout' },
]

function Beehive() {
  return (
    <ReactFlowProvider>
      <BeehiveInner />
    </ReactFlowProvider>
  )
}

function BeehiveInner() {
  const [nodes, setNodes] = useState<Node[]>(hiveNodes)
  const [edges, setEdges] = useState<Edge[]>(hiveEdges)
  const reactFlowInstance = useReactFlow()
  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) => {
      setNodes((snapshot) => applyNodeChanges<Node>(changes, snapshot))
    },
    [],
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((snapshot) => applyEdgeChanges(changes, snapshot))
    },
    [],
  )
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((snapshot) => addEdge(connection, snapshot))
    },
    [],
  )
  const handleDump = useCallback(() => {
    console.log(reactFlowInstance.toObject())
  }, [reactFlowInstance])

  return (
    <div className="beehive-flow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }}
        style={{ width: '100%', height: '100%' }}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Background gap={16} size={1} />
      </ReactFlow>
      <button type="button" className="beehive-dump" onClick={handleDump}>
        Dump flow
      </button>
    </div>
  )
}

export default Beehive
