<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
</script>

{#if $selectedElementIndex !== null && $elements[$selectedElementIndex].padding}
	<div class="m-1 rounded-lg border-2 p-2">
		<h2 class="font-semibold">Padding :</h2>

		<div class="flex items-center justify-between">
			<h3>Top</h3>
			<div class="flex space-x-1 justify-center p-1">
				<button
					disabled={+$elements[$selectedElementIndex].padding.top <= 1}
					class="rounded-md w-12 text-xl font-bold border-2"
					on:click={() => $elements[$selectedElementIndex].padding.top--}>-</button
				>
				<input
					type="number"
					min={0}
					class="border-2 rounded-md outline-none w-16 text-center"
					bind:value={$elements[$selectedElementIndex].padding.top}
				/>
				<button
					class="rounded-md w-12 text-xl font-bold border-2"
					on:click={() => $elements[$selectedElementIndex].padding.top++}>+</button
				>
			</div>
		</div>

		<div class="flex items-center justify-between p-1">
			<h3>Right</h3>
			<div class="flex space-x-1 justify-center p-1">
				<button
					disabled={+$elements[$selectedElementIndex].padding?.right <= 1}
					class="rounded-md w-12 text-xl font-bold border-2"
					on:click={() => $elements[$selectedElementIndex].padding.right--}>-</button
				>
				<input
					type="number"
					min={0}
					class="border-2 rounded-md outline-none w-16 text-center"
					bind:value={$elements[$selectedElementIndex].padding.right}
				/>
				<button
					class="rounded-md w-12 text-xl font-bold border-2"
					on:click={() => $elements[$selectedElementIndex].padding.right++}>+</button
				>
			</div>
		</div>

		<div class="flex items-center justify-between p-1">
			<h3>Bottom</h3>
			<div class="flex space-x-1 justify-center p-1">
				<button
					disabled={+$elements[$selectedElementIndex].padding?.bottom <= 1}
					class="rounded-md w-12 text-xl font-bold border-2"
					on:click={() => $elements[$selectedElementIndex].padding.bottom--}>-</button
				>
				<input
					type="number"
					min={0}
					class="border-2 rounded-md outline-none w-16 text-center"
					bind:value={$elements[$selectedElementIndex].padding.bottom}
				/>
				<button
					class="rounded-md w-12 text-xl font-bold border-2"
					on:click={() => $elements[$selectedElementIndex].padding.bottom++}>+</button
				>
			</div>
		</div>

		<div class="flex items-center justify-between p-1">
			<h3>Left</h3>
			<div class="flex space-x-1 justify-center p-1">
				<button
					disabled={+$elements[$selectedElementIndex].padding.left <= 1}
					class="rounded-md w-12 text-xl font-bold border-2"
					on:click={() => $elements[$selectedElementIndex].padding.left--}>-</button
				>
				<input
					type="number"
					min={0}
					class="border-2 rounded-md outline-none w-16 text-center"
					bind:value={$elements[$selectedElementIndex].padding.left}
				/>
				<button
					class="rounded-md w-12 text-xl font-bold border-2"
					on:click={() => $elements[$selectedElementIndex].padding.left++}>+</button
				>
			</div>
		</div>
	</div>
{/if}
