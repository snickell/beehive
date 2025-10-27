import type { NodeTypes } from '@xyflow/svelte'
import JsNodeView from './js/view.svelte'
import HiveNodeView from './hive/view.svelte'

export const nodeTypes: NodeTypes = {
  js: JsNodeView,
  hive: HiveNodeView,
}
