<script>
	import { gameState } from '$lib/stores';
	import { combine, useSpell } from '$lib/engine';
	import { spellbook } from '$lib/spellbook';

	let heldItem = null; //Stores the first item dropped in altar
	let feedbackMessage = 'Weave the Echoes....';

	function handleOnDrop(event) {
		event.preventDefault();

		let droppedItem = event.dataTransfer.getData('text/plain');
		// console.log(`Dropped "${droppedItem}" on the Altar!`);

		if (!heldItem) {
			//If there is no heldItem, current dropped one is held
			heldItem = droppedItem;
			feedbackMessage = `Dropped ${heldItem} to Altar, add another echo...`;

			return;
		}
		const newSpellName = combine(heldItem, droppedItem);

		if (!newSpellName) {
			feedbackMessage = 'The echoes repel each other. This combination is not possible.';
			heldItem = null;
			setTimeout(() => {
				heldItem = null;
				feedbackMessage = 'Weave the Echoes...';
			}, 3000);
			return;
		}

		const newSpellData = spellbook[newSpellName];

		// Use the function syntax for updating the store to ensure reactivity
		gameState.update((currentState) => {
			return {
				...currentState,
				inventory: {
					...currentState.inventory,
					[newSpellName]: spellbook[newSpellName]
				}
			};
		});
		feedbackMessage = `Success! You have woven '${newSpellName}'!`;

		// To reset heldItem and feedback messagge to default
		setTimeout(() => {
			heldItem = null;
			feedbackMessage = 'Weave the Echoes...';
		}, 3000);
	}
</script>

<div
	role="group"
	class="pixel-frame frame-wood mb-5 flex h-full w-full items-center justify-center bg-[#4d566386] p-4 backdrop-blur-lg"
	ondragover={(event) => {
		event.preventDefault();
	}}
	ondrop={handleOnDrop}
>
	<p class="text-glow animate-pulse font-pixel text-gray-500/50">{feedbackMessage}</p>
</div>
