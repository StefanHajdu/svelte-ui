<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox
	} from 'flowbite-svelte';
	import { analysesMock } from '../scripts/analyses';

	let analysesEnriched = $state(
		analysesMock.map((a: any) => {
			a.checked = false;
			return a;
		})
	);
	$inspect(analysesEnriched);
</script>

<Table hoverable={true}>
	<TableHead>
		<TableHeadCell class="p-4!">
			<Checkbox />
		</TableHeadCell>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Status</TableHeadCell>
		<TableHeadCell>Build Time</TableHeadCell>
		<TableHeadCell>Resources</TableHeadCell>
		<TableHeadCell>...</TableHeadCell>
	</TableHead>

	<TableBody tableBodyClass="divide-y">
		{#each analysesMock as analysis, i}
			<TableBodyRow>
				<TableBodyCell class="p-4!">
					<Checkbox
						onclick={() => {
							analysesEnriched[i].checked = !analysesEnriched[i].checked;
						}}
					/>
				</TableBodyCell>
				<TableBodyCell>{analysis.name}</TableBodyCell>
				<TableBodyCell>{analysis.status}</TableBodyCell>
				<TableBodyCell>{analysis.buildTime}</TableBodyCell>
				<TableBodyCell>{analysis.resources}</TableBodyCell>
				<TableBodyCell>{analysis.rest}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
