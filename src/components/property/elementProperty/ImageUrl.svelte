<script lang="ts">
	import { onMount } from 'svelte';
	import { elements, selectedElementIndex } from '../../../store/store';
	import axios from 'axios';

	let fileInput: any;

	onMount(() => {
		fileInput = document.getElementById('fileInput');
	});

	function handleUpload() {
		console.log('first');
		fileInput.click();
	}

	async function handleFileChange(event: any, index: number) {
		const file = event.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		console.log(file);
		try {
			const res = await axios.post(
				'https://api.imgbb.com/1/upload?key=ed602f466bd499b25d4e791b81dbd01e',
				formData
			);
			console.log(res.data.data.url);
			elements.update((elements) => {
				elements[index].imageUrl = res.data.data.url;
				return elements;
			});
		} catch (error) {
			console.log(error);
		}
	}
</script>

{#if $selectedElementIndex !== null}
	<div class="flex items-center justify-between m-2 rounded-md border-2">
		<h2 class="w-28 px-2 font-semibold">Image Url :</h2>

		<input
			type="text"
			class="w-full outline-none p-2 border-l-2"
			placeholder="www.example.com"
			bind:value={$elements[$selectedElementIndex].imageUrl}
		/>
		<div>
			<input
				type="file"
				accept="image/*"
				name="fileInput"
				id="fileInput"
				hidden
				on:change={(event) => handleFileChange(event, $selectedElementIndex)}
			/>
			<!-- <button on:click={handleUpload}>Upload</button> -->
		</div>
	</div>
{/if}
