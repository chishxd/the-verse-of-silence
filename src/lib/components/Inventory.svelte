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

<section
	class="pixel-frame frame-suspended grid h-full max-h-96 grid-cols-1 gap-2 overflow-y-auto p-2"
>
	<p class="mb-1 text-center font-pixel">Inventory</p>
	{#each Object.entries(items) as [name, item]}
		<div
			role="group"
			class="pixel-frame frame-amber flex cursor-grab items-center justify-start bg-stone-800 p-2 transition-transform hover:scale-110 active:cursor-grabbing"
			draggable="true"
			ondragstart={(event) => {
				event.dataTransfer.setData('text/plain', name);
			}}
		>
			<p class="text-md mt-1 font-serif">{item.icon} {name}</p>
		</div>
	{/each}
</section>
