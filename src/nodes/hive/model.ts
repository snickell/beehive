import type { Node } from '@xyflow/react'
import type { HiveDoc } from '../HiveDoc'

export const HIVE_NODE_TYPE = 'hive'

export type HiveNodeData = {
  hiveDoc: HiveDoc
}

export type HiveNode = Node<HiveNodeData, typeof HIVE_NODE_TYPE>
