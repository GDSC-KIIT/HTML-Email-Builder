<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center justify-between m-1 rounded-md border-2">
		<h2 class=" py-3 px-2 font-semibold">Background :</h2>
		<div class="flex space-x-2 items-center px-2">
			<input
				type="color"
				class="h-12 outline-none p-2 text-lg font-medium border-l-2"
				placeholder="Enter your content"
				bind:value={$elements[$selectedElementIndex].backgroundColor}
			/>
			<input
				class="text-md tracking-wider w-28 outline-none"
				bind:value={$elements[$selectedElementIndex].backgroundColor}
			/>
		</div>
	</div>
{/if}
