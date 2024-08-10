<script>
	import { mode } from '../../store/store';
	import DesktopIcon from '../Icons/DesktopIcon.svelte';
	import MobileIcon from '../Icons/MobileIcon.svelte';
</script>

<section class="">
	<div class="flex items-center space-x-1">
		<button
			on:click={() => ($mode = 'desktop')}
			class={`flex items-center space-x-1 rounded-md p-1 ${$mode === 'desktop' ? 'bg-purple-500 text-white' : 'border-2'} `}
		>
			<DesktopIcon />
			<span>Desktop</span>
		</button>

		<button
			on:click={() => ($mode = 'mobile')}
			class={`flex items-center space-x-1 rounded-md p-1 ${$mode === 'mobile' ? 'bg-purple-500 text-white' : 'border-2'} `}
		>
			<MobileIcon />
			<span>Mobile</span>
		</button>
	</div>
</section>
