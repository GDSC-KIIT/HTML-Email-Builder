<script lang="ts">
	import { elements, selectedElementIndex } from '../../store/store';
	import ElementProperty from './ElementProperty.svelte';
	import GlobalProperty from './GlobalProperty.svelte';
</script>

<div class={`min-w-[350px] max-w-[350px] mr-2`}>
	<div class="border rounded-lg w-full h- h-full">
		{#if $selectedElementIndex !== null}
			<ElementProperty element={$elements[$selectedElementIndex]} index={$selectedElementIndex} />
		{:else}
			<div class="h-full flex justify-center items-center font-semibold text-3xl">
				<p class="-rotate-45 text-gray-500">Properties</p>
			</div>
		{/if}
	</div>
</div>
