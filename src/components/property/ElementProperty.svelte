<script lang="ts">
	import { elements, selectedElementIndex } from '../../store/store';
	import DeleteIcon from '../Icons/DeleteIcon.svelte';
	import BackgroundColor from './elementProperty/BackgroundColor.svelte';
	import BorderRadius from './elementProperty/BorderRadius.svelte';
	import Color from './elementProperty/Color.svelte';
	import Content from './elementProperty/Content.svelte';
	import FontSize from './elementProperty/FontSize.svelte';
	import FontWeigth from './elementProperty/FontWeigth.svelte';
	import HeadingLevel from './elementProperty/HeadingLevel.svelte';
	import ListItem from './elementProperty/ListItem.svelte';
	import ListItemSpacing from './elementProperty/ListItemSpacing.svelte';
	import ListStyleType from './elementProperty/ListStyleType.svelte';
	import SocialList from './elementProperty/SocialList.svelte';
	import TextAlign from './elementProperty/TextAlign.svelte';
	import Underline from './elementProperty/Underline.svelte';
	import Url from './elementProperty/Url.svelte';
	import ImageUrl from './elementProperty/ImageUrl.svelte';
	import Padding from './elementProperty/padding.svelte';
	import HeigthWidth from './elementProperty/HeigthWidth.svelte';
	import ObjectFit from './elementProperty/ObjectFit.svelte';

	export let element;
	export let index;
	const handleDelete = () => {
		return elements.update((elements) => {
			selectedElementIndex.set(null);
			return elements.filter((e, idx) => idx !== index);
		});
	};
</script>

<div class="h-[calc(100vh_-_6rem)] flex flex-col">
	<div class="flex justify-between items-center border-b-2 p-2 text-2xl font-semibold">
		<span class="">Content Property</span>
		<button on:click={handleDelete} class="p-2 hover:bg-red-500 hover:text-white rounded-md"
			><DeleteIcon /></button
		>
	</div>

	<section class="overflow-y-auto">
		{#if 'content' in element}<Content />{/if}
		{#if 'headingLevel' in element}<HeadingLevel />{/if}
		{#if 'listItems' in element}<ListItem />{/if}
		{#if 'listStyleType' in element}<ListStyleType />{/if}
		{#if 'listItemSpacing' in element}<ListItemSpacing />{/if}
		{#if 'socialList' in element}<SocialList />{/if}
		{#if 'url' in element}<Url />{/if}
		{#if 'imageUrl' in element}<ImageUrl />{/if}
		{#if 'height' in element}<HeigthWidth />{/if}
		{#if 'objectFit' in element}<ObjectFit />{/if}
		{#if 'fontSize' in element}<FontSize />{/if}
		{#if 'fontWeight' in element}<FontWeigth />{/if}
		{#if 'color' in element}<Color />{/if}
		{#if 'backgroundColor' in element}<BackgroundColor />{/if}
		{#if 'textAlign' in element}<TextAlign />{/if}
		{#if 'underline' in element}<Underline />{/if}
		{#if 'borderRadius' in element}<BorderRadius />{/if}
		{#if 'padding' in element}<Padding />{/if}
	</section>
</div>

<!-- {#each element as props}
		{#if props === 'headingLevel'}
			<HeadingLevel />
		{/if}
		{#if props === 'content'}
			<Content />
		{/if}
		{#if props === 'fontSize'}
			<FontSize />
		{/if}
		{#if props === 'fontWeight'}
			<FontWeigth />
		{/if}
		{#if props === 'color'}
			<Color />
		{/if}
		{#if props === 'textAlign'}
			<TextAlign />
		{/if}
		{#if props === 'padding'}
			<Padding />
		{/if}
		{#if props === 'padding'}
			<Padding />
		{/if}
		{/each}
	-->
