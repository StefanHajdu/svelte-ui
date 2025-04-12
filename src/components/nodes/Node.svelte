<script lang="ts">
	import { Card, Dropdown, DropdownItem, Button } from 'flowbite-svelte';
	import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
	import { nodeFactoryMethod } from './NodeInstance';

	let { nodesInAnalysis = $bindable(), node } = $props();
	let nextNodeId = $state('');

	$effect(() => {
		if (nextNodeId !== '') {
			let el = document.getElementById(nextNodeId);
			el?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}
	});

	function getNodeIdx(uuid: string): number {
		return nodesInAnalysis.findIndex((node: any) => node.uuid === uuid);
	}

	function insertNextNode() {
		let nodeIdx = getNodeIdx(node.uuid);
		let nextNode = nodeFactoryMethod('Filter');
		nodesInAnalysis = nodesInAnalysis.toSpliced(nodeIdx + 1, 0, nextNode);
		nextNodeId = nextNode.uuid;
	}

	function removeNode() {
		let itemIdx = nodesInAnalysis.findIndex((n: any) => n.uuid === node.uuid);
		nodesInAnalysis.splice(itemIdx, 1);
	}
</script>

<div id={node.uuid}>
	<Card padding="md">
		<div class="flex justify-end">
			<DotsHorizontalOutline />
			<Dropdown class="w-36">
				{#if node.nodeType !== 'load'}
					<DropdownItem onclick={removeNode}>Remove</DropdownItem>
				{/if}
			</Dropdown>
		</div>
		<div class="flex flex-col items-center pb-4">
			<p>id: {node.uuid.slice(-5)}</p>
			<p>type: {node.nodeType}</p>
			<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{node.title}</h5>
			<span class="text-sm text-gray-500 dark:text-gray-400">SQL Node</span>
			<div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
				<Button>Summarize</Button>
				<Button>Data</Button>
			</div>
		</div>
	</Card>
	<Button size="xs" color="blue" onclick={insertNextNode}>New Node</Button>
</div>
