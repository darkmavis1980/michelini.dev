import { writable } from 'svelte/store';

export let themeStore = writable({
  theme: 'lime',
});