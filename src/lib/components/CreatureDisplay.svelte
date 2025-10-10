<script>
	const { creature } = $props();
</script>

<section
	class="pixel-frame frame-creature flex w-full flex-row border border-gray-700 bg-stone-800 p-6"
>
	<img src={creature.image} alt={creature.name} class="h-32 w-32 flex-shrink-0 object-contain" />

	<div>
		<h2 class="font-pixel text-xl font-bold text-amber-400">{creature.name}</h2>
		<p class="mt-2 font-almendra text-2xl break-words text-gray-300">
			{creature.description}
		</p>
	</div>
</section>
