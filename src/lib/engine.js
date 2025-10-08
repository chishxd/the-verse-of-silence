/**
 * @file This file contains the core game logic engine for The Verse of Silence.
 * It is responsible for all the "business logic" of the game, such as crafting
 * and combat resolution. It is designed to be completely UI-agnostic.
 */

import { elements } from '$lib/elements';
import { spellbook } from '$lib/spellbook';
import { creatures } from '$lib/creatures';
import { rules } from '$lib/rules';

/**
 * Combines two magical items to see if they can create a new spell.
 * This is the core crafting logic of the game.
 * @param {string} nameA The name of the first item to combine.
 * @param {string} nameB The name of the second item to combine.
 * @returns {string|null} The name of the produced spell if a valid recipe is found, otherwise null.
 */
export function combine(nameA, nameB) {
	const masterList = { ...spellbook, ...elements };

	//Extracting required tags from master list
	const tagA = masterList[nameA].tags;
	const tagB = masterList[nameB].tags;

	//Combining tags and popping dupes
	const uniqueTags = new Set([...tagA, ...tagB]);

	//Looping through each rule in rules and checking if every tag in rule.requires is present in one of the rules.
	for (const rule of rules) {
		const requiredTags = rule.requires; //This is a what requires for ONE RULE

		// we check if uniqueTags has every tag in required tags
		// requiredTags.every() picks one item from requiredTags at a time checks if uniqueTags has that tag using uniqueTags.has().
		// If all uniqueTags has requiredTags... isMatch is true, else false.
		const isMatch = requiredTags.every((tag) => uniqueTags.has(tag));

		// It's obvious isn't it? If isMatch is true whatever the rule's outcome is, it's returned.
		if (isMatch) {
			return rule.produces;
		}
	}

	// If the loop runs and isMatch turns out to be False, we return null
	return null;
}

/**
 * This function handles the battle Logic. It calculates what happens when certain spell is used on certain creature.
 *
 * @param {string} spellName - The name of a spell, an object from spellbook in ./spellbook.js
 * @param {string} creatureName - The name of a creature, an object from creatures object in ./creatures.js
 * * @returns {'MERCIFUL_VICTORY'|'FORCEFUL_VICTORY'|'NO_EFFECT'} The outcome of the interaction.
 */
export function useSpell(spellName, creatureName) {
	// ===========Type import for Intellisense ==================
	// I regret not going with TS for this project
	/** @typedef {import('$lib/spellbook').Spell} Spell */
	/** @typedef {import('$lib/creatures').Creature} Creature */

	if (!spellName) {
		return 'NO_EFFECT';
	}

	// ============= Looking up the Data =============

	/** @type {Spell} */
	const spellData = spellbook[spellName];

	/** @type {Creature} */
	const creatureData = creatures[creatureName];

	// ============ Logic Chain ===============

	/** @type {boolean} */
	// isVulnerable uses Array methods. 1) some() and 2).includes()
	// We check is if spell contains any of creatures' vulnerability' or not
	const isVulnerable = spellData.tags.some((tag) => creatureData.vulnerabilities.includes(tag));

	if (isVulnerable) {
		return 'MERCIFUL_VICTORY';
	}

	if (spellData.tags.includes('lethal')) {
		return 'FORCEFUL_VICTORY';
	}

	return 'NO_EFFECT';
}
