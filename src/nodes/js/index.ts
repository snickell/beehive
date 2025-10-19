import {
  JS_NODE_TYPE,
  DEFAULT_JS_SNIPPET,
  createJsNode,
} from './model.ts'

import { JsNodeView } from './view.tsx'

export class JS {
  static NODE_TYPE = JS_NODE_TYPE
  static DEFAULT_SNIPPET = DEFAULT_JS_SNIPPET
  static createNode = createJsNode
  static View = JsNodeView
}
