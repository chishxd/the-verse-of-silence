/**
 * @file Defines the creatures that inhabit the game world.
 */

/**
 * @typedef {Object} Creature
 * @property {string} name
 * @property {string} image
 * @property {string} description
 * @property {string[]} vulnerabilities
 */

/**
 * A dictionary of all creatures in the game.
 * The key is the creature's name.
 */
export const creatures = {
	// The key is now the creature's name
	Glimmerkin: {
		name: 'Glimmerkin',
		image: '/assets/creatures/glimmerkin.png',
		description: 'A small, crystalline creature that hums a soft tune...',
		vulnerabilities: ['light']
	}
};
