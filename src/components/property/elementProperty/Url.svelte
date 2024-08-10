<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center justify-between m-2 rounded-md border-2">
		<h2 class="w-28 px-2 font-semibold">Url :</h2>

		<input
			type="text"
			class="w-full outline-none p-2 border-l-2"
			placeholder="www.example.com"
			bind:value={$elements[$selectedElementIndex].url}
		/>
	</div>
{/if}
