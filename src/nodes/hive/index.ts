import { type Runnable } from '../Runnable.ts'
import { HiveNodeView } from './view.tsx'

export class Hive implements Runnable {
  static View = HiveNodeView

  run(): void {
    throw new Error('Method not yet implemented.')
  }
}
