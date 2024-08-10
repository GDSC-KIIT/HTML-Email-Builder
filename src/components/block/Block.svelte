<script lang="ts">
	import type { BlockType } from '../../types/BlockType';
	import HeadingIcon from '../Icons/HeadingIcon.svelte';
	import BlockElement from './BlockElement.svelte';

	let blocks: { src: string; type: BlockType }[] = [
		{
			src: '/headingIcon.svg',
			type: 'Title'
		},
		{
			src: '/paragraphIcon.svg',
			type: 'Paragraph'
		},
		{
			src: '/listIcon.svg',
			type: 'List'
		},
		{
			src: '/socialIcon.svg',
			type: 'Social'
		},
		{
			src: '/imageIcon.svg',
			type: 'Image'
		},
		{
			src: '/buttonIcon.svg',
			type: 'Button'
		},
		{
			src: '/linkIcon.svg',
			type: 'Link'
		}
	];
</script>

<div class="min-w-[250px] max-w-[250px] border-2 pb-2 ml-4 h-fit rounded-lg">
	<section class="">
		<div class="text-2xl text-center font-semibold p-2 mb-2 border-b-2">Blocks</div>
		<div class="flex justify-center flex-wrap">
			{#each blocks as block}
				<BlockElement {block} />
			{/each}
		</div>
	</section>
</div>
