<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
	import { FontWeight } from '../../../types/Element';
	import Block from '../../block/Block.svelte';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center m-1 rounded-lg border-2">
		<h2 class="px-2 font-semibold">Font Weight :</h2>
		<div class="flex space-x-1 justify-center p-1 flex-1">
			<button
				class={`rounded-md w-12 border-2 font-normal ${$elements[$selectedElementIndex].fontWeight === FontWeight.normal ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].fontWeight = FontWeight.normal)}>N</button
			>
			<button
				class={`rounded-md w-12 border-2 font-normal ${$elements[$selectedElementIndex].fontWeight === FontWeight.semiBold ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].fontWeight = FontWeight.semiBold)}
				>SB</button
			>
			<button
				class={`rounded-md w-12 border-2 font-normal ${$elements[$selectedElementIndex].fontWeight === FontWeight.bold ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].fontWeight = FontWeight.bold)}>B</button
			>
		</div>
	</div>
{/if}
