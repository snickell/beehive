<script lang="ts">
  import '@xyflow/svelte/dist/style.css'

  import {
    Background,
    Controls,
    MiniMap,
    SvelteFlow,
    addEdge,
    type Connection,
  } from '@xyflow/svelte'

  import type { HiveDoc } from '../nodes/HiveDoc'
  import { nodeTypes } from '../nodes/nodeTypes'

  export let hiveDoc: HiveDoc

  function handleConnect(connection: Connection) {
    addEdge(connection, hiveDoc.edges)
  }

  function handleDump() {
    console.log(hiveDoc.nodes, hiveDoc.edges)
  }
</script>

<div class="beehive-flow">
  <SvelteFlow
    class="beehive-flow__canvas"
    nodes={hiveDoc.nodes}
    edges={hiveDoc.edges}
    {nodeTypes}
    fitView={true}
    proOptions={{ hideAttribution: true }}
    onconnect={handleConnect}
  >
    <MiniMap />
    <Controls />
    <Background gap={16} size={1} />
  </SvelteFlow>

  <button type="button" class="beehive-dump" on:click={handleDump}>
    Dump flow
  </button>
</div>

<style>
  :global(html, body, #root) {
    height: 100%;
  }

  :global(body) {
    margin: 0;
  }

  .beehive-flow {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  :global(.beehive-flow__canvas) {
    width: 100%;
    height: 100%;
  }

  .beehive-dump {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
    padding: 6px 10px;
    font-size: 0.85rem;
    border-radius: 4px;
    border: 1px solid #ffd479;
    background: #fff5cc;
    cursor: pointer;
  }
</style>
