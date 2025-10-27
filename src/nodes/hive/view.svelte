<script lang="ts">
  import { Handle, Position } from '@xyflow/svelte'

  import type { HiveNode } from './model'
  import Beehive from '../../ui/Beehive.svelte'

  export let data: HiveNode['data'] | undefined
  export let selected = false
</script>

<div class={`hive-node${selected ? ' hive-node--selected' : ''}`}>
  <Handle type="target" position={Position.Top} />
  <div class="hive-node__header">Hive</div>
  {#if data?.hiveDoc}
    <Beehive hiveDoc={data.hiveDoc} />
  {/if}
  <Handle type="source" position={Position.Bottom} />
</div>

<style>
  .hive-node {
    min-width: 240px;
    max-width: 320px;
    background: #16211c;
    color: #f0fff4;
    border-radius: 8px;
    border: 1px solid #265339;
    box-shadow: 0 10px 18px rgba(6, 18, 12, 0.25);
    overflow: hidden;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    display: flex;
    flex-direction: column;
  }

  .hive-node--selected {
    border-color: #7ff0b8;
    box-shadow: 0 0 0 2px rgba(127, 240, 184, 0.35);
  }

  .hive-node__header {
    background: #1f3328;
    padding: 6px 10px;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
</style>
