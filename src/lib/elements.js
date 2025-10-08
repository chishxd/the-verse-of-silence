/**
 * @file Defines the base elemental items in the game.
 * These are the fundamental building blocks for crafting.
 */

/**
 * @typedef {Object} Element
 * @property {string} icon - The emoji icon for the element.
 * @property {string} description - A flavor text description.
 * @property {string[]} tags - The magical properties associated with the element.
 */

/**
 * A dictionary of all base elements available for crafting.
 * The key is the element's name.
 */

export const elements = {
	'Flickering Echo': {
		icon: '✨',
		description: 'An echo of pure energy and light. The memory of a star.',
		tags: ['light', 'energy', 'non-lethal']
	},
	'Sighing Echo': {
		icon: '💨',
		description: 'The last breath of a dying wind. An echo of motion, freedom, and force',
		tags: ['air', 'wind', 'force', 'non-lethal']
	},
	'Weeping Echo': {
		icon: '💧',
		description: 'The tear of a petrified god. An echo of sorrow, life, and flowing water',
		tags: ['water', 'liquid', 'wet', 'life', 'non-lethal']
	},
	'Grumbling Echo': {
		icon: '🗿',
		description: 'The deep hum of the sleeping earth. An echo of stability, stone, and permanence',
		tags: ['earth', 'solid', 'stone', 'defense', 'non-lethal']
	},
	'Clinging Echo': {
		icon: '🌿',
		description:
			'The stubborn grasp of a single vine. An echo of nature, persistence, and connection',
		tags: ['organic', 'sticky', 'nature', 'non-lethal']
	}
};
