<script>
	import { elements } from '$lib/elements';
	import { spellbook } from '$lib/spellbook';
	import { creature } from '$lib/creature';
	import { rules } from '$lib/rules';

	/**
	 * Combines two magical items to see if they can create a new spell.
	 * This is the core crafting logic of the game.
	 * @param {string} nameA The name of the first item to combine.
	 * @param {string} nameB The name of the second item to combine.
	 * @returns {string|null} The name of the produced spell if a valid recipe is found, otherwise null.
	 */
	function combine(nameA, nameB) {
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
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
