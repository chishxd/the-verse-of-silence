<script>
	const { creature } = $props();
</script>

<section class="rounded-lg border border-gray-700 bg-stone-800 p-6">
	<h2 class="font-pixel text-3xl font-bold text-amber-400">{creature.name}</h2>
	<p class="mt-2 font-pixel text-sm text-gray-300">{creature.description}</p>
</section>
