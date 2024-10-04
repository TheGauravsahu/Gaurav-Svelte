<script>
	let isOpen = false;

	const toggleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<nav
	class="p-6 bg-white shadow-md fixed w-[300px] h-[40px] z-10 right-1/2 translate-x-[50%] flex items-center mt-4 rounded-full"
>
	<ul class="flex items-center gap-4 rounded-full">
		<li>
			<a data-sveltekit-preload-data="hover" href="/" class="font-semibold">Home</a>
		</li>
		<li>
			<a data-sveltekit-preload-data="hover" href="/projects" class="font-semibold">Projects</a>
		</li>
		<li>
			<a data-sveltekit-preload-data="hover" href="/about" class="font-semibold">About</a>
		</li>
		<li>
			<a target="_blank" href="https://gauravblogs.vercel.app/" class="font-semibold">Blog</a>
		</li>
	</ul>
</nav>
