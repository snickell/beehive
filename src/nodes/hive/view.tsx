import {
  Handle,
  Position,
  type NodeProps,
} from '@xyflow/react'
import type { HiveNode } from './model.ts'
import './style.css'
import Beehive from '../../ui/Beehive.tsx'

export function HiveNodeView({ selected, data: { hiveDoc } }: NodeProps<HiveNode>) {
  return (
    <div className={`hive-node${selected ? ' hive-node--selected' : ''}`}>
      <Handle type="target" position={Position.Top} />
      <div className="hive-node__header">Hive</div>
      <Beehive hiveDoc={hiveDoc} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}
