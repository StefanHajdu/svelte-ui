import { analysesMock } from '$lib/analyses';
import { LS_KEY_ANALYSES, fromLocalStorage } from '$lib/localStorageHandles';

export function load() {
	let analysesInLS = fromLocalStorage(LS_KEY_ANALYSES);
	return analysesInLS ? { [LS_KEY_ANALYSES]: analysesInLS } : { [LS_KEY_ANALYSES]: analysesMock };
}
