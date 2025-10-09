<script>
	import { creatures } from '$lib/creatures';
	/**
	 * @file This is the main page of the application.
	 * It currently serves as a placeholder and a testbed for engine functions.
	 */
	import { combine, useSpell } from '$lib/engine.js';
	import Inventory from '$lib/components/Inventory.svelte';
	import CreatureDisplay from '$lib/components/CreatureDisplay.svelte';
	import CraftingAltar from '$lib/components/CraftingAltar.svelte';
	import { elements } from '$lib/elements';

	const glimmerkin = creatures['Glimmerkin'];
</script>

<!-- The Top level container -->
<main
	class="flex min-h-screen flex-col items-center justify-between bg-stone-900 p-4 font-serif text-white sm:p-8"
>
	<!-- The container for game (So that game doesn't get "too wide" on wide screens) -->
	<div class="mx-auto flex w-full max-w-4xl flex-col gap-8">
		<CreatureDisplay creature={glimmerkin} />

		<CraftingAltar />

		<Inventory items={elements} />
		<!-- CraftingAltar, CreatureDisplay and Inventory goes here -->
	</div>
</main>
