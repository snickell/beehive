import type { Node } from '@xyflow/react'
import type { HiveDoc } from '../HiveDoc'

export type HiveData = {
  hiveDoc: HiveDoc
}

export type HiveNode = Node<HiveData>

export function run(hiveData: HiveData): void {
  console.log(hiveData)
  throw new Error('Method not yet implemented.')
}
