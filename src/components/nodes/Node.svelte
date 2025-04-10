<script lang="ts">
	import { Card, Dropdown, DropdownItem, Button } from 'flowbite-svelte';
	import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
	import { NodeInstance } from './NodeInstance';

	let { nodesInAnalysis = $bindable(), node } = $props();

	function getNodeIdx(uuid: string): number {
		return nodesInAnalysis.findIndex((node: any) => node.uuid === uuid);
	}

	function insertNextNode() {
		let nodeIdx = getNodeIdx(node.uuid);
		let nextNode = new NodeInstance('Filter');
		nodesInAnalysis.splice(nodeIdx + 1, 0, nextNode);
	}

	function removeNode() {
		let itemIdx = nodesInAnalysis.findIndex((n: any) => n.uuid === node.uuid);
		nodesInAnalysis.splice(itemIdx, 1);
	}
</script>

<Card padding="md">
	<div class="flex justify-end">
		<DotsHorizontalOutline />
		<Dropdown class="w-36">
			<DropdownItem onclick={removeNode}>Remove</DropdownItem>
		</Dropdown>
	</div>
	<div class="flex flex-col items-center pb-4">
		<p>node_id: {node.uuid.slice(-5)}</p>
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{node.title}</h5>
		<span class="text-sm text-gray-500 dark:text-gray-400">SQL Node</span>
		<div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
			<Button>Summarize</Button>
			<Button>Data</Button>
		</div>
	</div>
</Card>
<Button size="xs" color="blue" onclick={insertNextNode}>New Node</Button>
