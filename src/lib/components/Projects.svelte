<script>
	import BorderBeam from './BorderBeam.svelte';
	import BlurFade from './BlurFade.svelte';
	export let projects;
</script>

	

	<!-- Grid Layout for Projects -->
	<div class="flex flex-col md:flex-row flex-wrap items-center justify-center gap-12 w-full mih-h-screen overflow-hidden">
		{#each projects as project}
			<!-- Project Card -->
			<BlurFade delay={0.25 * 2}>
				<article
					class="flex max-w-sm bg-white flex-col items-start justify-between relative rounded-3xl p-4 border border-gray-700/70 bg-background hover:scale-105 cursor-pointer transition-all ease-in-out"
				>
					<BorderBeam size={150} duration={12} />
					<div class="flex items-center gap-x-4 text-xs">
						<a
							href="https://github.com/SikandarJODD"
							class="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-semibold border border-gray-400"
							>Project {project.id}</a
						>
					</div>
					<div class="my-2">
						<img
							src={project.imageUrl}
							alt={project.title}
							class="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
						/>
					</div>
					<div class="group relative">
						<h3 class="mt-3 text-xl font-semibold leading-6">
							<a data-sveltekit-preload-data="hover" href="/">
								<span class="absolute inset-0"></span>
								{project.title}
							</a>
						</h3>
						<p class="mt-5 line-clamp-3 text-md leading-6">
							{project.description}
						</p>
					</div>
					<!-- Project Info -->
					<div class="bg-white relative z-10">
						
						<div class="mt-4 flex gap-2">
							{#each project.techStack as tech}
								<span class="text-xs bg-gray-100 text-gray-800 py-1 px-2 rounded-full">{tech}</span>
							{/each}
						</div>

						<!-- Project Links -->
						<div class="mt-6 flex space-x-4">
							<a
								href={project.githubLink}
								target="_blank"
								class="text-sm text-blue-600 hover:underline">View Code</a
							>
							<a
								href={project.liveDemo}
								target="_blank"
								class="text-sm text-blue-600 hover:underline">Live Demo</a
							>
						</div>
					</div>
					
				</article>
			</BlurFade>
		{/each}
	</div>
