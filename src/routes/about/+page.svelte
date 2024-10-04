<script>
	import BlurFade from '$lib/components/BlurFade.svelte';
</script>

<section id="about" class="relative max-w-6xl min-h-screen mx-auto py-32 px-4 overflow-hidden">
	<div class="absolute top-0 -z-10 h-full w-full bg-white">
		<div
			class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"
		></div>
	</div>
	<BlurFade delay={0.15}>
		<h2 class="text-5xl font-bold text-center text-gray-800 mb-10">About Me</h2>
	</BlurFade>

	<div class="flex flex-col md:flex-row items-center gap-10">
		<!-- Profile Image -->
		<div class="flex-shrink-0">
			<BlurFade delay={0.25} once={true}>
				<img
					src="/gaurav.jpg"
					alt="Gaurav Sahu"
					class="h-40 w-40 rounded-full border-4 border-gray-200 shadow-lg object-cover"
				/>
			</BlurFade>
		</div>
		<!-- About Text -->
		<div class="text-lg text-gray-700">
			<BlurFade delay={0.15}>
				<p class="mb-4">
					Hello! I’m <span class="font-semibold text-gray-900">Gaurav Sahu</span>, a passionate web
					developer living in Bihar. I love creating beautiful and functional websites that enhance
					user experience and deliver value to my clients.
				</p>
			</BlurFade>
			<BlurFade delay={0.15 * 2}>
				<p>
					My journey into web development began with a curiosity for how things work, and it has
					grown into a commitment to continuous learning and improvement. I enjoy exploring new
					technologies and frameworks to create innovative solutions that meet modern web standards.
				</p>
			</BlurFade>
			<br />
			<BlurFade delay={0.25 * 3}>
				<p class="mb-4">
					When I'm not coding, you can find me reading tech blogs, contributing to open-source
					projects, or experimenting with new design concepts. I believe in the power of
					collaboration and enjoy working with others to bring ideas to life.
				</p>
			</BlurFade>
			<BlurFade delay={0.25 * 4}>
				<p>
					Feel free to <a
						data-sveltekit-preload-data="hover"
						href="/projects"
						class="text-blue-500 underline">check out my projects</a
					>
				</p>
			</BlurFade>
		</div>
	</div>
</section>
