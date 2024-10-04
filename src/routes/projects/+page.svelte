<script>
	import BlurFade from '$lib/components/BlurFade.svelte';
	import Projects from '$lib/components/Projects.svelte';

	export let data;
	const projects = data.projects;
</script>

<section class="w-full min-h-screen py-32 px-6">
	<div
		class="absolute top-0 left-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
	></div>
	<BlurFade delay={0.25}>
		<h2 class="text-5xl font-bold text-center text-gray-800 mb-12">Projects</h2>
	</BlurFade>

	<!-- Projects Grid -->
	<div class="max-w-8xl">
		<Projects {projects} />
	</div>

	<BlurFade delay={0.25 * 4}>
		<p class="my-2 font-semibold text-center">
			Feel free to <a target="_blank" href="https://github.com/TheGauravsahu/" class="text-blue-500 underline">check out my other projects</a>
		</p>
	</BlurFade>
</section>
