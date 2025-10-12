<script>
	/**
	 * @typedef {Object} Item
	 * @property {string} icon
	 * @property {string} description
	 * @property {string[]} tags
	 */

	/**
	 * A dictionary of items to display.
	 * The key is the item's name.
	 */
	import { fade, fly } from 'svelte/transition';
	import { dragState } from '$lib/stores';
	import { flip } from 'svelte/animate';

	let { items = {} } = $props();

	let shouldGlow = $derived(Object.keys(items).length <= 5);
</script>

<section
	class="pixel-frame frame-suspended grid h-full max-h-96 grid-cols-1 gap-2 overflow-y-auto bg-transparent p-2 backdrop-blur-lg"
>
	<p
		class="mb-1 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-center font-almendra text-xl text-transparent"
	>
		Inventory
	</p>
	{#each Object.entries(items) as [name, item] (name)}
		<div
			role="group"
			class="pixel-frame frame-amber flex cursor-grab items-center justify-start bg-transparent p-2 transition-transform hover:scale-110 active:cursor-grabbing"
			draggable="true"
			class:animate-inventory-glow={shouldGlow}
			class:opacity-50={$dragState.isDragging && $dragState.draggedItemName === name}
			class:!frame-amber={$dragState.isDragging && $dragState.draggedItemName === name}
			ondragstart={(event) => {
				new Audio('/audio/woosh.mp3').play();
				$dragState = { isDragging: true, draggedItemName: name };
				event.dataTransfer.setData('application/the-verse-of-silence', name);
			}}
			ondragend={() => {
				$dragState = { isDragging: false, draggedItemName: null };
			}}
			in:fly={{ y: -20, duration: 400 }}
			animate:flip={{ duration: 300 }}
		>
			<p class="text-md mt-1 font-serif">{item.icon} {name}</p>
		</div>
	{/each}
</section>
