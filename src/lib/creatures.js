/**
 * @typedef {Object} Creature
 * @property {string} name
 * @property {string} image
 * @property {string} description
 * @property {string[]} vulnerabilities
 */
export const creatures = {
	// The key is now the creature's name
	Glimmerkin: {
		name: 'Glimmerkin',
		image: '/glimmerkin.png',
		description: 'A small, crystalline creature that hums a soft tune...',
		vulnerabilities: ['light']
	}
};
