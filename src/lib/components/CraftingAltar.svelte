<script>
	import { gameState } from '$lib/stores';
	import { combine, useSpell } from '$lib/engine';
	import { spellbook } from '$lib/spellbook';

	let heldItem = null; //Stores the first item dropped in altar
	let feedbackMessage = 'Drag an echo from your inventory here...';

	let showSuccessFlash = false;
	let showFailureShake = false;

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
			new Audio('/audio/no_effect.mp3').play();
			showFailureShake = true;

			setTimeout(() => {
				showFailureShake = false;
			}, 300);

			feedbackMessage = 'The echoes repel each other. This combination is not possible.';
			heldItem = null;
			setTimeout(() => {
				heldItem = null;
				feedbackMessage = 'Weave the Echoes...';
			}, 3000);
			return;
		}

		new Audio('/audio/spell-casting.mp3').play();
		showSuccessFlash = true;

		setTimeout(() => {
			showSuccessFlash = false;
		}, 500);

		const newSpellData = spellbook[newSpellName];

		// Use the function syntax for updating the store to ensure reactivity
		// Add new spell at the TOP by putting it BEFORE spreading the rest
		gameState.update((currentState) => {
			return {
				...currentState,
				inventory: {
					[newSpellName]: spellbook[newSpellName],
					...currentState.inventory
				}
			};
		});
		feedbackMessage = `Success! You have woven '${newSpellName}'!`;

		// To reset heldItem and feedback message to default
		setTimeout(() => {
			heldItem = null;
			feedbackMessage = 'Weave the Echoes...';
		}, 3000);
	}
</script>

<div
	role="group"
	class="pixel-frame frame-wood mb-5 flex h-full w-full items-center justify-center bg-[#4d566386] p-4 backdrop-blur-lg"
	class:animate-shake={showFailureShake}
	ondragover={(event) => {
		event.preventDefault();
	}}
	ondrop={handleOnDrop}
>
	{#if showSuccessFlash}
		<div class="animate-flash h-32 w-32"></div>
	{/if}
	<p class="text-glow animate-pulse font-pixel text-gray-500/50">{feedbackMessage}</p>
</div>
