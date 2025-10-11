<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let { outcome } = $props();
</script>

<div class="flex min-h-screen items-center justify-center p-8">
	<div class="max-w-2xl">
		{#if outcome === 'MERCIFUL_VICTORY'}
			<div class="space-y-6 text-center" in:fly={{ y: 50, duration: 800, easing: quintOut }}>
				<div class="mb-8 animate-pulse text-6xl">✨</div>
				<h1
					class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-pixel text-4xl font-bold text-transparent"
				>
					Path of Wisdom
				</h1>
				<p class="font-almendra text-2xl leading-relaxed text-gray-200">
					You calmed the Glimmerkin with a harmless flash of light. It blinks, confused but
					unharmed, then scurries into the shadows, revealing the path forward.
				</p>
				<p class="font-serif text-lg text-cyan-300 italic">
					"You chose intellect over force. The echoes remember your mercy."
				</p>
			</div>
		{:else if outcome === 'FORCEFUL_VICTORY'}
			<div class="space-y-6 text-center">
				<div
					class="mb-8 animate-pulse text-6xl"
					in:fly={{ y: 50, duration: 800, easing: quintOut }}
				>
					⚡
				</div>
				<h1
					class="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text font-pixel text-4xl font-bold text-transparent"
				>
					Path of Power
				</h1>
				<p class="font-almendra text-2xl leading-relaxed text-gray-200">
					Your jagged shard pierces the creature's fragile form. The Glimmerkin dissolves into
					shimmering dust, its soft hum silenced forever. The path is clear.
				</p>
				<p class="font-serif text-lg text-red-300 italic">
					"You chose power over restraint. The echoes remember your violence."
				</p>
			</div>
		{:else if outcome === 'NO_EFFECT'}
			<div class="space-y-6 text-center">
				<div class="mb-8 text-6xl opacity-50"
                in:fly={{ y: 50, duration: 800, easing: quintOut }}>💭</div>
				<h1 class="font-pixel text-3xl text-gray-400">Nothing Happened</h1>
				<p class="font-almendra text-xl text-gray-500">
					The spell fizzles harmlessly. The Glimmerkin stares at you, unimpressed.
				</p>
				<p class="font-serif text-sm text-gray-600 italic">Perhaps try a different approach...</p>
			</div>
		{/if}
	</div>
</div>
