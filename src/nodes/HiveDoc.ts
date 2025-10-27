import type { Edge, Node } from '@xyflow/svelte'
import type { JSNode } from './js/model.ts'
import type { HiveNode } from './hive/model.ts'

// FIXME: eventually we should disallow generic `Node` types here
type HiveDocValidNodeTypes = JSNode | HiveNode | Node

export type HiveDoc = {
  version: 1
  nodes: HiveDocValidNodeTypes[]
  edges: Edge[]
}
