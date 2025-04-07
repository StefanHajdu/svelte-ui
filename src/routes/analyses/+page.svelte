<script lang="ts">
	import { browser } from '$app/environment';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { LS_KEY_SCOPED, LS_KEY_ANALYSES, fromLocalStorage } from '../../lib/localStorageHandles';

	const scopedAnalyses = loadScoped();

	function loadScoped(): any[] {
		if (browser) {
			let analyses = fromLocalStorage(LS_KEY_ANALYSES);
			let scopedKeys = fromLocalStorage(LS_KEY_SCOPED);
			return scopedKeys.map((key: string) => {
				return analyses[key];
			});
		}
		return [];
	}

	$inspect(scopedAnalyses);
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<Header />

	<main class="bg-white-500 space-y-4 p-4">
		<Tabs>
			{#each scopedAnalyses as analysis}
				<TabItem open title={analysis.name}>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						<b>{analysis.name}</b>
					</p>
				</TabItem>
			{/each}
		</Tabs>
	</main>

	<Footer />
</div>
