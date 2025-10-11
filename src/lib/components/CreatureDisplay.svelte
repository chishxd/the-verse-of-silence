<script>
	import { useSpell } from '$lib/engine';
	import { spellbook } from '$lib/spellbook';
	import { gameState } from '$lib/stores';

	const { creature } = $props();

	function handleDrop(event) {
		event.preventDefault();

		const droppedItem = event.dataTransfer.getData('text/plain');
		let feedbackMessage = `Echo the Waves....`;

		if (!(droppedItem in spellbook)) {
			feedbackMessage = `Nothing Happened...`;
			return;
		}
		const outcome = useSpell(droppedItem, creature.name);
		console.log(`Used '${droppedItem}', outcome: ${outcome}`); //DEBUGGING

		gameState.update((state) => {
			return {
				...state,
				victoryState: outcome
			};
		});
	}
</script>

<section
	role="group"
	class="pixel-frame frame-creature flex w-full flex-row border border-gray-700 bg-transparent p-6 backdrop-blur-lg"
	ondragover={(event) => {
		event.preventDefault();
	}}
	ondrop={handleDrop}
>
	<img src={creature.image} alt={creature.name} class="h-32 w-32 flex-shrink-0 object-contain" />

	<div>
		<h2 class="font-pixel text-xl font-bold text-amber-400">{creature.name}</h2>
		<p class="mt-2 font-almendra text-2xl break-words text-gray-300">
			{creature.description}
		</p>
	</div>
</section>
