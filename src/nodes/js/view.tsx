import { useCallback, type ChangeEvent } from 'react'
import {
  Handle,
  Position,
  useReactFlow,
  type NodeProps,
} from '@xyflow/react'
import type { JSNode } from './model.ts'
import './style.css'

export function JsNodeView({ id, data, selected }: NodeProps<JSNode>) {
  const { setNodes } = useReactFlow()

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target

      setNodes((nodes) =>
        nodes.map((node) => {
          if (node.id !== id) return node

          return {
            ...node,
            data: {
              ...node.data,
              code: value,
            },
          }
        }),
      )
    },
    [id, setNodes],
  )

  return (
    <div className={`js-node${selected ? ' js-node--selected' : ''}`}>
      <Handle type="target" position={Position.Top} />
      <div className="js-node__header">JavaScript</div>
      <textarea
        className="js-node__editor"
        spellCheck={false}
        value={data?.code ?? ''}
        onChange={handleChange}
        aria-label="JavaScript code"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}
