<script lang="ts">
  import { Handle, Position, useSvelteFlow } from '@xyflow/svelte'

  import type { JSNode } from './model'

  export let id: JSNode['id']
  export let data: JSNode['data'] | undefined
  export let selected = false

  const { updateNodeData } = useSvelteFlow<JSNode>()

  function handleChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value
    updateNodeData(id, { code: value })
  }
</script>

<div class={`js-node${selected ? ' js-node--selected' : ''}`}>
  <Handle type="target" position={Position.Top} />
  <div class="js-node__header">JavaScript</div>
  <textarea
    class="js-node__editor"
    spellcheck={false}
    value={data?.code ?? ''}
    on:input={handleChange}
    aria-label="JavaScript code"
  ></textarea>
  <Handle type="source" position={Position.Bottom} />
</div>

<style>
  .js-node {
    min-width: 240px;
    max-width: 320px;
    background: #1a1a2d;
    color: #f7f7ff;
    border-radius: 8px;
    border: 1px solid #3c3c68;
    box-shadow: 0 10px 18px rgba(8, 8, 22, 0.25);
    overflow: hidden;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    display: flex;
    flex-direction: column;
  }

  .js-node--selected {
    border-color: #ffd479;
    box-shadow: 0 0 0 2px rgba(255, 212, 121, 0.35);
  }

  .js-node__header {
    background: #2c2c4d;
    padding: 6px 10px;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .js-node__editor {
    padding: 10px;
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
    font: inherit;
    min-height: 150px;
    resize: none;
    line-height: 1.4;
  }

  .js-node__editor:focus {
    box-shadow: inset 0 0 0 1px #ffd479;
  }
</style>
