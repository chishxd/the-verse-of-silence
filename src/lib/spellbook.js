/**
 * @typedef {Object} Spell
 * @property {string} icon
 * @property {string} description
 * @property {string[]} tags
 */
export const spellbook = {
	'Blinding Flash': {
		icon: '💥',
		description:
			'A violent, harmless burst of pure light. Designed to disorient, not to destroy, but may blind you.',
		tags: ['light', 'disorient', 'non-lethal']
	},
	'Jagged Shard': {
		icon: '🔪',
		description: 'A sharpened piece of stone, honed by a cutting wind. An echo weaponized.',
		tags: ['stone', 'force', 'sharp', 'lethal']
	},
	'Soothing Water': {
		icon: '💧',
		description: 'A gentle splash of calming water.',
		tags: ['water', 'restorative', 'non-lethal']
	}
};
