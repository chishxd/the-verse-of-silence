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
	let { items = {} } = $props();
</script>

<section class="grid grid-cols-5 gap-4">
	{#each Object.entries(items) as [name, item]}
		<div
			class="pixel-frame frame-amber flex h-24 flex-col items-center justify-center bg-stone-800 p-2 text-center transition-transform hover:scale-110"
		>
			<p class="text-md mt-1 font-serif">{item.icon} {name}</p>
		</div>
	{/each}
</section>
