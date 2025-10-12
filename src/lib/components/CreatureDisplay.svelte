<script>
	import { useSpell } from '$lib/engine';
	import { spellbook } from '$lib/spellbook';
	import { gameState } from '$lib/stores';
	import { fly, fade } from 'svelte/transition';

	let { creature, class: className = '' } = $props();

	let feedbackMessage = $state('');
	let showFeedback = $state(false);

	let shouldGlow = $derived(Object.keys($gameState.inventory).length > 5);

	function handleDrop(event) {
		event.preventDefault();

		const droppedItem = event.dataTransfer.getData('application/the-verse-of-silence');

		if (!(droppedItem in spellbook)) {
			showMessage('Not a spell! Try crafting one first.');
			return;
		}

		const outcome = useSpell(droppedItem, creature.name);
		console.log(`Used '${droppedItem}', outcome: ${outcome}`);

		if (outcome === 'NO_EFFECT') {
			showMessage('The spell had no effect... Try a different approach!');
		} else if (outcome === 'MERCIFUL_VICTORY' || outcome === 'FORCEFUL_VICTORY') {
			gameState.update((state) => {
				return {
					...state,
					victoryState: outcome
				};
			});
		}
	}

	function showMessage(message) {
		feedbackMessage = message;
		showFeedback = true;
		setTimeout(() => {
			showFeedback = false;
		}, 3000);
	}
</script>

<div class="relative w-full">
	<section
		role="group"
		class="pixel-frame frame-creature flex w-full flex-row border border-gray-700 bg-[#4d5663d3] p-6 backdrop-blur-lg {className}"
		class:animate-creature-glow={shouldGlow}
		ondragover={(event) => {
			event.preventDefault();
		}}
		ondrop={handleDrop}
	>
		<img src={creature.image} alt={creature.name} class="h-32 w-32 flex-shrink-0 object-contain" />

		<div>
			<h2
				class="bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text font-almendra text-3xl font-bold text-transparent"
			>
				{creature.name}
			</h2>
			<p class="mt-2 font-almendra text-xl break-words text-gray-300">
				{creature.description}
			</p>
		</div>
	</section>

	{#if showFeedback}
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
			in:fly={{ y: -20, duration: 300 }}
			out:fade={{ duration: 200 }}
		>
			<div class="pixel-frame frame-amber bg-stone-900 px-6 py-3 shadow-lg">
				<p class="font-pixel text-sm whitespace-nowrap text-amber-300">
					{feedbackMessage}
				</p>
			</div>
		</div>
	{/if}
</div>
