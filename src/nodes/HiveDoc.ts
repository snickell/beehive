import type { Edge, Node} from '@xyflow/react'
import type { JSNode } from './js/model.ts'

// FIXME: eventually we should disallow generic `Node` types here
type HiveNode = JSNode | Node

export type HiveDoc = {
  version: 1
  nodes: HiveNode[]
  edges: Edge[]
}
