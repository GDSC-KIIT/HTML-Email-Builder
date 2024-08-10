<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center m-1 rounded-lg border-2">
		<h2 class="px-2 font-semibold">Border Radius :</h2>
		<div class="flex space-x-1 justify-center p-1 flex-1">
			<button
				disabled={+$elements[$selectedElementIndex].borderRadius <= 1}
				class="rounded-md w-12 text-xl font-bold border-2"
				on:click={() => $elements[$selectedElementIndex].borderRadius--}>-</button
			>
			<input
				type="number"
				min={0}
				class="border-2 rounded-md outline-none w-16 text-center"
				bind:value={$elements[$selectedElementIndex].borderRadius}
			/>
			<button
				class="rounded-md w-12 text-xl font-bold border-2"
				on:click={() => $elements[$selectedElementIndex].borderRadius++}>+</button
			>
		</div>
	</div>
{/if}
