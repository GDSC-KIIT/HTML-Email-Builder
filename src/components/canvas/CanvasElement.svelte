<script lang="ts">
	import { elements, selectedElementIndex } from '../../store/store';
	import type { BlockType } from '../../types/BlockType';
	import { createElement } from '../../utils/createElement';
	import ButtonElement from '../elements/ButtonElement.svelte';
	import HeadingElement from '../elements/HeadingElement.svelte';
	import ImageElement from '../elements/ImageElement.svelte';
	import LinkElement from '../elements/LinkElement.svelte';
	import ListElement from '../elements/ListElement.svelte';
	import ParagraphElement from '../elements/ParagraphElement.svelte';
	import SocialElement from '../elements/SocialElement.svelte';

	export let element;
	export let index: number;

	let dropAbove: null | boolean = null;

	const handleDragOver = (event: DragEvent) => {
		event.preventDefault();
		const temp = (event.target as HTMLElement)?.getBoundingClientRect();
		const center = (temp.top + temp.bottom) / 2;

		const posY = event.clientY;
		dropAbove = posY <= center;
	};
	const handleDrop = (event: DragEvent, index: number) => {
		const blockType = event.dataTransfer?.getData('emailElement') as BlockType;
		if (!blockType) return;

		let newIndex = dropAbove ? index : index + 1;
		let newElements = $elements;
		newElements.splice(newIndex, 0, createElement(blockType));
		elements.set(newElements);

		dropAbove = null;
		selectedElementIndex.set(newIndex);
	};
</script>

<div
	class={`element  relative border-2 
    ${dropAbove !== null ? (dropAbove ? 'border-t-blue-500' : 'border-b-blue-500') : ''}
	${$selectedElementIndex === index ? 'border-purple-700 bg-purple-200/50' : 'border-white'}
    `}
	role="none"
	on:dragover={handleDragOver}
	on:dragleave={() => (dropAbove = null)}
	on:drop={(event) => handleDrop(event, index)}
	on:click|stopPropagation={() => ($selectedElementIndex = index)}
>
	{#if element.type === 'title'}
		<HeadingElement {element} />
	{:else if element.type === 'paragraph'}
		<ParagraphElement {element} />
	{:else if element.type === 'image'}
		<ImageElement {element} />
	{:else if element.type === 'button'}
		<ButtonElement {element} />
	{:else if element.type === 'list'}
		<ListElement {element} />
	{:else if element.type === 'link'}
		<LinkElement {element} />
	{:else if element.type === 'social'}
		<SocialElement {element} />
	{/if}
</div>

<!-- style={`font-size: ${element.fontSize}px; text-align: ${element.textAlign}`} -->
