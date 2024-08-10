<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
	import DeleteIcon from '../../Icons/DeleteIcon.svelte';

	let newItem: string = '';

	const handleDelete = (index: number, itemIdx: number) => {
		elements.update((elements) => {
			elements[index].listItems = elements[index].listItems.filter(
				(item: any, idx: number) => idx !== itemIdx
			);
			return elements;
		});
	};

	const handleAddNewItem = (index: number) => {
		elements.update((elements) => {
			elements[index].listItems.push(newItem);
			newItem = '';
			return elements;
		});
	};

	const handleChage = () => {
		elements.update((elements) => elements);
	};
</script>

{#if $selectedElementIndex !== null && $elements[$selectedElementIndex].listItems}
	<div class="p-1 m-1 rounded-lg border-2">
		<h2 class="px-2 w-32 font-semibold">List Item</h2>
		<div class="flex flex-col space-y-1 justify-start p-1">
			{#each $elements[$selectedElementIndex]?.listItems as item, index}
				<div class="flex justify-between border-2 px-1">
					<input type="text" class="p-1 outline-none" bind:value={item} on:change={handleChage} />
					<button
						class="border-l-2 px-1"
						on:click={() => handleDelete($selectedElementIndex, index)}><DeleteIcon /></button
					>
				</div>
			{/each}
			<div class="flex items-center justify-between border-2 pl-1 border-purple-500">
				<input
					type="text"
					class="p-1 outline-none w-full"
					bind:value={newItem}
					placeholder="Add New Items"
				/>
				<button
					disabled={!newItem}
					on:click={() => handleAddNewItem($selectedElementIndex)}
					class="text-2xl font-semibold border-l-2 border-purple-500 px-2">+</button
				>
			</div>
		</div>
	</div>
{/if}
