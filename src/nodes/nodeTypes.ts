import type { NodeTypes } from '@xyflow/react'
import { JsNodeView } from './js/view.tsx'
import { HiveNodeView } from './hive/view.tsx'

export const nodeTypes: NodeTypes = {
  js: JsNodeView,
  hive: HiveNodeView,
}
