<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
	import { FontWeight, ListStyleType } from '../../../types/Element';
	import Block from '../../block/Block.svelte';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center m-1 rounded-lg border-2">
		<h2 class="px-2 font-semibold">List Style Type :</h2>
		<div class="flex space-x-1 justify-center p-1 flex-1">
			<button
				class={`rounded-md px-1 border-2 font-normal ${$elements[$selectedElementIndex].listStyleType === ListStyleType.number ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].listStyleType = ListStyleType.number)}
				>Num</button
			>
			<button
				class={`rounded-md px-1 border-2 font-normal ${$elements[$selectedElementIndex].listStyleType === ListStyleType.circle ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].listStyleType = ListStyleType.circle)}
				>Circle</button
			>
			<button
				class={`rounded-md px-1 border-2 font-normal ${$elements[$selectedElementIndex].listStyleType === ListStyleType.square ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].listStyleType = ListStyleType.square)}
				>Square</button
			>
		</div>
	</div>
{/if}
