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

	const glimmerkin = creatures['Glimmerkin'];
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
		<div class="mx-auto flex w-full max-w-4xl flex-col gap-8">
			<!-- CraftingAltar, CreatureDisplay and Inventory goes here -->
			<CreatureDisplay creature={glimmerkin} />
		</div>

		<CraftingAltar />
		<Inventory items={elements} />
	</main>
</div>
