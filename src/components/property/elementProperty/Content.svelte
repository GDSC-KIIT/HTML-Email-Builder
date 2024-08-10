<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center justify-between m-2 rounded-md border-2">
		<h2 class="w-28 py-3 px-1 font-semibold">Content :</h2>
		{#if $elements[$selectedElementIndex].type === 'paragraph'}
			<textarea
				class="w-full outline-none p-2 text-lg font-medium resize-none border-l-2"
				rows="2"
				bind:value={$elements[$selectedElementIndex].content}
			></textarea>
		{:else}
			<input
				type="text"
				class="w-full outline-none p-2 text-lg font-medium border-l-2"
				placeholder="Enter your content"
				bind:value={$elements[$selectedElementIndex].content}
			/>
		{/if}
	</div>
{/if}
