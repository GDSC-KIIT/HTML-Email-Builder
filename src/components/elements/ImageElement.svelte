<script lang="ts">
	import type { Image } from '../../utils/Elements';
	import { onMount } from 'svelte';

	export let element: Image;
	$: height = `height : ${element.height || 0}px`;
	$: width = `width : ${element.width || 0}px`;
	$: objectFit = `object-fit : ${element.objectFit}`;
</script>

<div class="w-full p-1 border-dashed">
	<img
		src={element.imageUrl || '/photo.png'}
		alt=""
		class=" m-auto"
		style={`${height}; ${width}; ${objectFit}`}
	/>
</div>
