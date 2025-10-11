<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { gameState } from '$lib/stores';
	import { elements } from '$lib/elements';
	let { outcome } = $props();

	// Updates gameState
	function playAgain() {
		gameState.set({
			inventory: elements,
			victoryState: 'PLAYING'
		});
	}
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
					With a harmless flash of woven light, you outsmart the timid creature. It scurries into
					the shadows, revealing the path. You chose intellect over force.
				</p>
				<p class="font-serif text-lg text-cyan-300 italic">
					"A faint, harmonious note resonates within you. The Verse finds your methods...
					intriguing."
				</p>
				<button
					class="pixel-frame frame-amber mt-8 px-6 py-2 font-pixel text-lg transition-colors hover:bg-amber-400 hover:text-stone-900"
					onclick={playAgain}
				>
					Play Again
				</button>
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
					You answered the creature's fear with a decisive, piercing strike. The echo you wove was
					too powerful for it to withstand, and it dissolved into pure energy. The path is clear.
					Your strength is undeniable.
				</p>
				<p class="font-serif text-lg text-red-300 italic">
					"A deep, powerful note rings in the silence. The Verse recognizes your strength... and
					yearns for more."
				</p>
				<button
					class="pixel-frame frame-amber mt-8 px-6 py-2 font-pixel text-lg transition-colors hover:bg-amber-400 hover:text-stone-900"
					onclick={playAgain}
				>
					Play Again
				</button>
			</div>
		{/if}
	</div>
</div>
