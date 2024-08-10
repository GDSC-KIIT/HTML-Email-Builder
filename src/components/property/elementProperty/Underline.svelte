<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center m-1 rounded-lg border-2">
		<h2 class="px-2 font-semibold">Underline :</h2>
		<div class="flex space-x-1 justify-center p-1 flex-1">
			<button
				class={`rounded-md w-12 border-2  ${$elements[$selectedElementIndex].underline ? 'bg-purple-500 text-white' : ''} `}
				on:click={() => ($elements[$selectedElementIndex].underline = true)}>Yes</button
			>
			<button
				class={`rounded-md w-12 border-2 ${$elements[$selectedElementIndex].underline ? '' : 'bg-purple-500 text-white'} `}
				on:click={() => ($elements[$selectedElementIndex].underline = false)}>No</button
			>
		</div>
	</div>
{/if}
