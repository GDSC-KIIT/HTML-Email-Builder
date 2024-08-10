<script lang="ts">
	export let block: { src: string; type: string };

	const handleDragStart = (event: DragEvent, blockType: string) => {
		event.dataTransfer?.setData('emailElement', blockType);
	};
</script>

<button
	draggable="true"
	on:dragstart={(event) => handleDragStart(event, block.type)}
	class="h-24 w-28 m-1 bg-white shadow-sm border-2 rounded-md flex flex-col items-center justify-center"
>
	<img src={`/icons/${block.src}`} alt={block.type} draggable="false" class="h-8 w-8" />
	<span class="font-semibold">
		{block.type}
	</span>
</button>
