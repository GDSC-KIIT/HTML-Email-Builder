<script>
	import { elements } from '../store/store';
	import '../app.css';
	import Block from '../components/block/Block.svelte';
	import Canvas from '../components/canvas/Canvas.svelte';

	import Header from '../components/header/Header.svelte';
	import Property from '../components/property/Property.svelte';
</script>

<main class="flex flex-col h-screen min-w-[1000px]">
	<Header />
	<section class="flex">
		<Block />
		<Canvas />
		<Property />
	</section>
</main>
