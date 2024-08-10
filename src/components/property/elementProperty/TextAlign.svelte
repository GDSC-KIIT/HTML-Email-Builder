<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
	import { Align } from '../../../types/Element';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center m-1 rounded-lg border-2">
		<h2 class="px-2 font-semibold">Align :</h2>
		<div class="flex space-x-1 justify-center p-1 flex-1">
			<button
				class={`rounded-md p-1 border-2 font-sm ${$elements[$selectedElementIndex].textAlign === Align.left ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].textAlign = Align.left)}>Left</button
			>
			<button
				class={`rounded-md p-1 border-2 font-sm ${$elements[$selectedElementIndex].textAlign === Align.center ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].textAlign = Align.center)}>Center</button
			>
			<button
				class={`rounded-md p-1 border-2 font-sm ${$elements[$selectedElementIndex].textAlign === Align.right ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].textAlign = Align.right)}>Right</button
			>
			<button
				class={`rounded-md p-1 border-2 font-sm ${$elements[$selectedElementIndex].textAlign === Align.justify ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => ($elements[$selectedElementIndex].textAlign = Align.justify)}
				>Justify</button
			>
		</div>
	</div>
{/if}
