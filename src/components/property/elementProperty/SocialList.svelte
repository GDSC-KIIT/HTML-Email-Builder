<script lang="ts">
	import { elements, selectedElementIndex } from '../../../store/store';
</script>

{#if $selectedElementIndex !== null && $elements[$selectedElementIndex].socialList}
	<div class="p-1 m-1 rounded-lg border-2">
		<h2 class="px-2 w-32 font-semibold">Social Icons :</h2>
		{#each $elements[$selectedElementIndex].socialList as social}
			<div class="border-2 my-1 p-1">
				<div class="flex items-center justify-between">
					<span class="text-md font-semibold">{social.name}</span>
					<button class="border-2 px-1" on:click={() => (social.active = !social.active)}
						>{social.active ? 'Disable' : 'Enable'}</button
					>
				</div>
				<div
					class={`flex items-center justify-between m-2 rounded-md border-2 ${social.active ? '' : 'bg-gray-200'}`}
				>
					<h2 class="w-28 px-2 font-semibold">Url :</h2>

					<input
						type="text"
						disabled={!social.active}
						class={`w-full outline-none p-2 border-l-2 ${social.active ? '' : 'bg-gray-200'}`}
						placeholder="www.example.com"
						bind:value={social.url}
					/>
				</div>
			</div>
		{/each}
	</div>
{/if}
