import type { Node } from '@xyflow/svelte'
import type { HiveDoc } from '../HiveDoc'

export type HiveData = {
  hiveDoc: HiveDoc
}

export type HiveNode = Node<HiveData>

export function run(node: HiveNode): void {
  console.log(node)
  throw new Error('Method not yet implemented.')
}
