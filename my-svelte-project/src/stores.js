import { writable } from 'svelte/store';

// the whole app is a list of dialogs (tabs/windows..)
export const dialogs = writable([]);
