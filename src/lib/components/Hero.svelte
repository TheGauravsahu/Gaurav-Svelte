<script>
	import BlurFade from './BlurFade.svelte';
</script>

<section class="flex flex-col items-center justify-center gap-4 text-center py-24 h-screen">
	<BlurFade delay={0.15}>
		<h1 class="text-5xl font-extrabold">Hey there! <br /> I am Gaurav Sahu.</h1>
	</BlurFade>
	<BlurFade delay={0.15 * 2}>
		<p class="text-lg max-w-lg  mb-4 animate-fade-in font-semibold">
			A passionate developer who loves building clean and scalable web applications. Check out some
			of my work below!
		</p>
	</BlurFade>
	<BlurFade delay={0.15 * 3}>
		<a
			href="#projects"
			class="px-6 mt-6 py-3 bg-black text-white rounded-full shadow hover:scale-105 transition"
		>
			View My Projects
		</a>
	</BlurFade>
</section>
