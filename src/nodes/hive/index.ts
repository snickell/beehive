import { type Runnable } from '../Runnable.ts'
import { HIVE_NODE_TYPE } from './model.ts'

import { HiveNodeView } from './view.tsx'

export class Hive implements Runnable {
  static NODE_TYPE = HIVE_NODE_TYPE
  static View = HiveNodeView

  run(): void {
    throw new Error('Method not yet implemented.')
  }
}
