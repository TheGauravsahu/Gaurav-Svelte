<script>
	import BlurFade from '$lib/components/BlurFade.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	export let data;
	const projects = data.projects.slice(0, 3);
</script>

<div class="min-h-screen">
	<div class="absolute top-0 -z-10 h-full w-full bg-white">
		<div
			class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"
		></div>
	</div>
	<!-- Hero Section -->
	<Hero />

	<!-- Products -->
	<section id="projects" class="max-w-8xl mx-auto py-16 px-4">
		<BlurFade delay={0.15}>
			<h2 class="text-5xl font-bold text-center text-gray-800 mb-16">My Projects</h2>
		</BlurFade>
		<Projects {projects} />
	</section>
</div>
