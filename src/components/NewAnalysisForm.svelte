<script lang="ts">
	import { Label, Input, Modal, Button } from 'flowbite-svelte';

	let newAnalysisForm = false;
	let name = '';

	function requestNewAnalysisSession(): void {
		console.log(`POST /newSession ${name}`);
	}
</script>

<Button color="green" on:click={() => (newAnalysisForm = true)}>New Analysis</Button>

<Modal bind:open={newAnalysisForm} size="xs" autoclose outsideclose>
	<div>
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create New Analysis</h3>
		<Label class="space-y-2">
			<span>Name your analysis:</span>
			<Input type="text" name="analysisName" placeholder="name" required bind:value={name} />
		</Label>
		<Button on:click={requestNewAnalysisSession} class="w-full1" href="analyses">Create</Button>
	</div>
</Modal>
