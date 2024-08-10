<script lang="ts">
	import { elements, mode, selectedElementIndex } from '../../store/store';
	import type { BlockType } from '../../types/BlockType';
	import { createElement } from '../../utils/createElement';
	import CanvasElement from './CanvasElement.svelte';

	// handle drop if no any Element is Present
	const handleDrop = (event: DragEvent) => {
		const blockType = event.dataTransfer?.getData('emailElement') as BlockType;
		if (!blockType) return;
		elements.set([createElement(blockType)]);
		selectedElementIndex.set(0);
	};
</script>

<section class="flex-1 min-w-[500px] overflow-x-auto mx-2">
	<div
		class="bg-white w-full h-[calc(100vh_-_5rem)] m-auto overflow-y-scroll"
		role="none"
		on:click={() => ($selectedElementIndex = null)}
	>
		<div
			class={`content ${$mode === 'mobile' ? 'w-[480px]' : 'w-[800px]'} border-2 transition-all duration-500 m-auto`}
		>
			{#if $elements.length === 0}
				<div
					role="none"
					on:dragover|preventDefault
					on:drop={handleDrop}
					class={`text-2xl text-purple-500 flex items-center justify-center h-16 bg-purple-300/50 border-2 border-dashed border-purple-500`}
				>
					Drop Here
				</div>
			{:else}
				{#each $elements as element, index}
					<CanvasElement {element} {index} />
				{/each}
			{/if}
		</div>
	</div>
</section>
