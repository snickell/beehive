import type { NodeTypes } from '@xyflow/react'
import { JS } from './js'
import { Hive } from './hive'

export const nodeTypes: NodeTypes = {
  [JS.NODE_TYPE]: JS.View,
  [Hive.NODE_TYPE]: Hive.View,
}
