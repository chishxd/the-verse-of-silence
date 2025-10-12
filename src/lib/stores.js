import { writable } from 'svelte/store';
import { elements } from './elements';

/**
 * A writable store that holds the state of the game.
 *
 * @typedef {Object} GameState
 * @property {Object.<string, Element>} inventory - The player's inventory, containing all available elements.
 * @property {'PLAYING' | 'MERCIFUL_VICTORY' | 'FORCEFUL_VICTORY'} victoryState - The current state of the game.
 */

export const gameState = writable({
	inventory: elements,
	victoryState: 'PLAYING'
});

export const dragState = writable({
	isDragging: false,
	draggedItemName: null
});
