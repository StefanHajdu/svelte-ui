<script lang="ts">
	import { Card, Dropdown, DropdownItem, Button } from 'flowbite-svelte';
	import { DotsHorizontalOutline } from 'flowbite-svelte-icons';

	let { allNodes = $bindable(), name, nodeType } = $props();

	function addNode() {
		allNodes.push({
			name: `${allNodes.length + 1}st Node`,
			nodeType: 'SQL Node'
		});
	}

	function removeNode() {
		let itemIdx = allNodes.findIndex((node: any) => node.name === name);
		allNodes.splice(itemIdx, 1);
		allNodes = allNodes;
	}
</script>

<Card padding="md">
	<div class="flex justify-end">
		<DotsHorizontalOutline />
		<Dropdown class="w-36">
			<DropdownItem onclick={removeNode}>Delete</DropdownItem>
		</Dropdown>
	</div>
	<div class="flex flex-col items-center pb-4">
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
		<span class="text-sm text-gray-500 dark:text-gray-400">{nodeType}</span>
		<div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
			<Button>Summarize</Button>
			<Button>Data</Button>
		</div>
	</div>
</Card>
<Button size="xs" color="blue" onclick={addNode}>New Node</Button>
