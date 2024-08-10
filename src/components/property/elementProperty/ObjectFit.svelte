<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
	import { ObjectFit } from '../../../types/Element';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center m-1 rounded-lg border-2">
		<h2 class="px-2 font-semibold">Object Fit :</h2>
		<div class="flex space-x-1 justify-center p-1 flex-1">
			<button
				class={`rounded-md px-1 border-2 font-normal ${$elements[$selectedElementIndex].objectFit === ObjectFit.cover ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].objectFit = ObjectFit.cover)}
				>cover</button
			>
			<button
				class={`rounded-md px-1 border-2 font-normal ${$elements[$selectedElementIndex].objectFit === ObjectFit.contain ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].objectFit = ObjectFit.contain)}
				>contain</button
			>
			<button
				class={`rounded-md px-1 border-2 font-normal ${$elements[$selectedElementIndex].objectFit === ObjectFit.fill ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].objectFit = ObjectFit.fill)}>fill</button
			>
			<button
				class={`rounded-md px-1 border-2 font-normal ${$elements[$selectedElementIndex].objectFit === ObjectFit.none ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].objectFit = ObjectFit.none)}>none</button
			>
		</div>
	</div>
{/if}
