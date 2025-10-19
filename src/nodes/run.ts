import type { Node } from '@xyflow/react'

import { run as runJS, type JSNode } from './js/model.ts'
import { run as runHive, type HiveNode } from './hive/model.ts'

export function run(node: Node): void {
  switch (node.type) {
    case 'js':
      runJS(node as JSNode)
      break
    case 'hive':
      runHive(node as HiveNode)
      break
    default:
      throw new Error(`Unknown node type: ${node.type}`)
  }
}
