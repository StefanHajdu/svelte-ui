<script lang="ts">
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import NewAnalysisForm from '../components/NewAnalysisForm.svelte';
	import AnalysisTable from '../components/AnalysisTable.svelte';
	import { ButtonGroup, Button } from 'flowbite-svelte';
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<Header />

	<!-- Main -->
	<main class="bg-white-500 space-y-4 p-4">
		<ButtonGroup>
			<NewAnalysisForm />
			<Button color="red">Delete Analysis</Button>
		</ButtonGroup>

		<AnalysisTable />
	</main>

	<Footer />
</div>
