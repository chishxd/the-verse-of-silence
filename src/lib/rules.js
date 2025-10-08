/**
 * @file Defines the crafting recipes for the game.
 * Each rule specifies the required tags to produce a specific spell.
 */

/**
 * @typedef {Object} CraftingRule
 * @property {string[]} requires - An array of tags that must be present to craft the item.
 * @property {string} produces - The name of the spell produced by the recipe.
 */

/**
 * An array of all crafting rules in the game.
 * @type {{requires: string[], produces: string}[]}
 */

export const rules = [
	{ requires: ['energy', 'air'], produces: 'Blinding Flash' },
	{ requires: ['stone', 'force'], produces: 'Jagged Shard' },
	{ requires: ['water', 'life'], produces: 'Soothing Water' }
];
