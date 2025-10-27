import type { Node } from '@xyflow/svelte'

export type JSData = {
  code: string
}
export type JSNode = Node<JSData>

export function run(node: JSNode): void {
  console.log(node)
  throw new Error('Method not yet implemented.')
}
