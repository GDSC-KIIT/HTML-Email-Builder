<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
	import { FontWeight, HeadingLevel } from '../../../types/Element';
	import Block from '../../block/Block.svelte';

	const handleClick = (index: number, headingLevel: HeadingLevel) => {
		elements.update((elements) => {
			if (headingLevel == HeadingLevel.h1) elements[index].fontSize = 38;
			else if (headingLevel == HeadingLevel.h2) elements[index].fontSize = 30;
			else elements[index].fontSize = 24;

			elements[index].headingLevel = headingLevel;

			return elements;
		});
	};
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center m-1 rounded-lg border-2">
		<h2 class="px-2 font-semibold">Heading Level :</h2>
		<div class="flex space-x-1 justify-center p-1 flex-1">
			<button
				disabled={$elements[$selectedElementIndex].headingLevel === HeadingLevel.h1}
				class={`rounded-md w-12 border-2 font-normal ${$elements[$selectedElementIndex].headingLevel === HeadingLevel.h1 ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => handleClick($selectedElementIndex, HeadingLevel.h1)}>h1</button
			>
			<button
				disabled={$elements[$selectedElementIndex].headingLevel === HeadingLevel.h2}
				class={`rounded-md w-12 border-2 font-normal ${$elements[$selectedElementIndex].headingLevel === HeadingLevel.h2 ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => handleClick($selectedElementIndex, HeadingLevel.h2)}>h2</button
			>
			<button
				disabled={$elements[$selectedElementIndex].headingLevel === HeadingLevel.h3}
				class={`rounded-md w-12 border-2 font-normal ${$elements[$selectedElementIndex].headingLevel === HeadingLevel.h3 ? 'bg-purple-500 text-white' : ''}`}
				on:click={() => handleClick($selectedElementIndex, HeadingLevel.h3)}>h3</button
			>
		</div>
	</div>
{/if}
