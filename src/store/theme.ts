import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const getTheme = () => {
	if (browser) {
		return window.localStorage.getItem('theme') ?? 'light';
	}
	return 'light';
};

const theme = writable(getTheme());

if (browser) {
	theme.subscribe((value) => {
		window.localStorage.setItem('theme', value);
	});
}

export default theme;
