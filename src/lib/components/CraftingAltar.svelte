<div
	role="group"
	class="pixel-frame frame-wood mb-5 flex h-64 w-full items-center justify-center p-4"
	ondragover={(event) => {
		event.preventDefault();
	}}
	ondrop={(event) => {
		event.preventDefault();

		let itemName = event.dataTransfer.getData('text/plain');
		console.log(`Dropped "${itemName}" on the Altar!`);
	}}
>
	<p class="animate-pulse font-pixel text-gray-500/50">Weave the Echoes...</p>
</div>
