import type { Node as FlowNode, XYPosition } from '@xyflow/react'

export const JS_NODE_TYPE = 'js'

export type JSNodeData = {
  code: string
}

export type JSNode = FlowNode<JSNodeData, typeof JS_NODE_TYPE>

export const DEFAULT_JS_SNIPPET = `function greet(name) {
  return \`Hello, \${name}!\`
}`

export type CreateJsNodeOptions = {
  id: string
  position: XYPosition
  code?: string
}

export const createJsNode = ({
  id,
  position,
  code = DEFAULT_JS_SNIPPET,
}: CreateJsNodeOptions): JSNode => ({
  id,
  type: JS_NODE_TYPE,
  position,
  data: {
    code,
  },
})
