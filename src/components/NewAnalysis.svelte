<script lang="ts">
	import { TabItem } from 'flowbite-svelte';
	import { NodeInstance } from './nodes/NodeInstance';
	import Node from './nodes/Node.svelte';

	let { name } = $props();
	let nodesInAnalysis = $state([new NodeInstance('Load')]);

	$inspect(nodesInAnalysis);
</script>

<TabItem open title={name}>
	<p class="text-sm text-gray-500 dark:text-gray-400">
		<b>{name}</b>
	</p>
	{#each nodesInAnalysis as node}
		<Node bind:nodesInAnalysis {node} />
	{/each}
</TabItem>
