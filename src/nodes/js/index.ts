import { type Runnable } from '../Runnable.ts'
import { JsNodeView } from './view.tsx'

export class JS implements Runnable {
  static View = JsNodeView

  run(): void {
    throw new Error('Method not yet implemented.')
  }
}
