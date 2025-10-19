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

import { nodeTypes } from '../nodes/nodeTypes'
import EXAMPLE_HIVE_DOC from '../nodes/EXAMPLE_HIVE_DOC'


function Beehive() {
  return (
    <ReactFlowProvider>
      <BeehiveInner />
    </ReactFlowProvider>
  )
}

function BeehiveInner() {
  const reactFlowInstance = useReactFlow()

  const [nodes, setNodes] = useState<Node[]>(EXAMPLE_HIVE_DOC.nodes)
  const [edges, setEdges] = useState<Edge[]>(EXAMPLE_HIVE_DOC.edges)

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
        nodeTypes={nodeTypes}
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
