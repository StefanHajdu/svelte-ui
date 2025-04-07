<script lang="ts">
	import { TabItem } from 'flowbite-svelte';
	import Node from '../components/nodes/Node.svelte';

	let { name } = $props();
	let nodes = $state([
		{
			name: '1st Node',
			nodeType: 'Probaly Load Dataset Node'
		}
	]);

	$inspect(nodes);
</script>

<TabItem open title={name}>
	<p class="text-sm text-gray-500 dark:text-gray-400">
		<b>{name}</b>
	</p>
	{#each nodes as node}
		<Node bind:allNodes={nodes} name={node.name} nodeType={node.nodeType} />
	{/each}
</TabItem>
