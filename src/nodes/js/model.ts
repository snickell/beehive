import type { Node } from '@xyflow/react'

export type JSData = {
  code: string
}
export type JSNode = Node<JSData>

export function run(jsData: JSData): void {
  console.log(jsData)
  throw new Error('Method not yet implemented.')
}
