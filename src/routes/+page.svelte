<script>
	/**
	 * @file This is the main page of the application.
	 * It currently serves as a placeholder and a testbed for engine functions.
	 */
	import { combine, useSpell } from '$lib/engine.js';
	import Inventory from '$lib/components/Inventory.svelte';
	import CreatureDisplay from '$lib/components/CreatureDisplay.svelte';
	import CraftingAltar from '$lib/components/CraftingAltar.svelte';
	import { elements } from '$lib/elements';
	import { creatures } from '$lib/creatures';
	import { gameState } from '$lib/stores';
	import VictoryScreen from '$lib/components/VictoryScreen.svelte';

	const glimmerkin = creatures['Glimmerkin'];

	console.log($gameState.victoryState);
</script>

<!-- The Top level container -->
<div
	class="fixed inset-0 z-[-1] bg-cover bg-center"
	style="background-image: url('/assets/backgrounds/cave.png');"
>
	<!-- <div class="absolute inset-0 bg-stone-950/70"></div> -->
	<main
		class="flex min-h-screen flex-col items-center justify-between p-4 font-serif text-white sm:p-8"
	>
		<!-- The container for game (So that game doesn't get "too wide" on wide screens) -->
		{#if $gameState.victoryState === 'PLAYING'}
			<div class="flex min-h-screen w-full max-w-4xl flex-col gap-4">
				<CreatureDisplay
					creature={glimmerkin}
					class={$gameState.inventory.length > 5 ? 'animate-creature-glow' : ''}
				/>

				<div class="flex gap-6">
					<div class="mb-2 flex w-2/3">
						<CraftingAltar />
					</div>

					<div class="w-1/3">
						<Inventory
							items={$gameState.inventory}
							class={$gameState.inventory.length <= 5 ? 'animate-inventory-glow' : ''}
						/>
					</div>
				</div>
			</div>
		{:else}
			<VictoryScreen outcome={$gameState.victoryState} />
		{/if}
	</main>
</div>
