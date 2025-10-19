import { type Runnable } from '../Runnable.ts'
import {
  JS_NODE_TYPE,
  DEFAULT_JS_SNIPPET,
  createJsNode,
} from './model.ts'

import { JsNodeView } from './view.tsx'

export class JS implements Runnable {
  static NODE_TYPE = JS_NODE_TYPE
  static DEFAULT_SNIPPET = DEFAULT_JS_SNIPPET
  static createNode = createJsNode
  static View = JsNodeView

  run(): void {
    throw new Error('Method not yet implemented.')
  }
}
