<script lang="ts">
	import type { Social } from '../../utils/Elements';
	import Facebook from '../Icons/Facebook.svelte';
	import Twitter from '../Icons/Twitter.svelte';
	import Instagram from '../Icons/Instagram.svelte';
	import Linkedin from '../Icons/Linkedin.svelte';
	export let element: Social;

	$: padding = `padding : ${element.padding.top}px ${element.padding.right}px ${element.padding.bottom}px ${element.padding.left}px`;
</script>

<div class="flex justify-center" style={`${padding};`}>
	<div class="flex space-x-2">
		{#each element.socialList as social}
			{#if social.active}
				{#if social.name === 'facebook'}
					<a href={'http://' + social.url} target="_blank" class="w-7 h-7">
						<Facebook />
					</a>
				{/if}
				{#if social.name === 'twitter'}
					<a href={'http://' + social.url} target="_blank" class="w-7 h-7">
						<Twitter />
					</a>
				{/if}
				{#if social.name === 'instagram'}
					<a href={'http://' + social.url} target="_blank" class="w-7 h-7">
						<Instagram />
					</a>
				{/if}
				{#if social.name === 'linkedin'}
					<a href={'http://' + social.url} target="_blank" class="w-7 h-7">
						<Linkedin />
					</a>
				{/if}
			{/if}
		{/each}
	</div>
</div>
