import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const getElements = () => {
	if (browser) {
		let value = window.localStorage.getItem('elements');
		return value ? JSON.parse(value) : [];
	}
	return [];
};
export const elements = writable<any[]>(getElements());
export const selectedElementIndex = writable<null | number>(null);
export const mode = writable('desktop');

elements.subscribe((elements) => {
	if (browser) {
		localStorage.setItem('elements', JSON.stringify(elements));
	}
});

selectedElementIndex.subscribe((idx) => {
	console.log('selected index : ', idx);
});
