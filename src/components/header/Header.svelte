<script>
	import theme from '../../store/theme';
	import HeaderCenter from './HeaderCenter.svelte';
	import HeaderLeft from './HeaderLeft.svelte';
	import HeaderRight from './HeaderRight.svelte';

	function toggleTheme() {
		theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	}
</script>

<header class="h-16 flex justify-between items-center py-2 px-4 min-w-[1000px]">
	<HeaderLeft />
	<HeaderCenter />
	<HeaderRight />

	<!-- <button on:click={toggleTheme} class="border-2 p-1">{$theme}</button> -->
</header>
