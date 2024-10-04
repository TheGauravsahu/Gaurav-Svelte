import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const projects = [
		{
			id: 1,
			title: 'Gaurav Blogs',
			description:
				'Gaurav Blogs is a modern blog web application developed using SvelteKit, leveraging the GitHub API as its CMS.',
			imageUrl: '/gauravblogs.png',
			techStack: ['SvelteKit', 'Tailwind CSS', 'GitHub API', 'Vercel'],
			githubLink: 'https://github.com/TheGauravsahu/Gaurav-Blogs',
			liveDemo: 'https://jobhub.com'
		},
		{
			id: 2,
			title: 'Svelte Store',
			description:
				'Svelte Store is an e-commerce platform with admin dashboard developed with SvelteKit and powered by Firebase.',
			imageUrl: '/sveltestore.png',
			techStack: ['Sveltekit', 'Firebase', 'TailwindCSS'],
			githubLink: 'https://github.com/TheGauravsahu/Svelte-Store',
			liveDemo: 'https://gaurav-store.vercel.app/'
		},
		{
			id: 3,
			title: 'Gaurvice',
			description: 'A Service Booking Platform in NextJs using Hygraph as CMS.',
			imageUrl: '/gaurvice.png',
			techStack: ['Next Js', 'Hygraph', 'TailwindCSS'],
			githubLink: 'https://github.com/TheGauravsahu/Gaurvice',
			liveDemo: 'https://gaurvice.vercel.app/'
		},
		{
			id: 4,
			title: 'Gaurav Movie',
			description: 'Movie Platform in Svelte-Kit using OMDB Api.',
			imageUrl: '/gauravmovie.png',
			techStack: ['Svelte Kit', 'OMDB Api', 'Pico CSS'],
			githubLink: 'https://github.com/TheGauravsahu/Movie-App',
			liveDemo: 'https://gaurav-movie.vercel.app/'
		},
		{
			id: 5,
			title: 'Gaurav Chat',
			description: 'Chat app using svelte kit and firebase.',
			imageUrl: '/gauravchat.png',
			techStack: ['Svelte Kit', 'Daisy Ui', 'Tailwind CSS'],
			githubLink: 'https://github.com/TheGauravsahu/Svelte-Chat',
			liveDemo: 'https://gaurav-chat.vercel.app/'
		},
		{
			id: 6,
			title: 'Job Hub',
			description: 'Job platform made using Nuxt Js and Django Rest Api.',
			imageUrl: '/jobhub.png',
			techStack: ['Nuxt Js', 'Django Rest Framework', 'Tailwind CSS'],
			githubLink: 'https://github.com/TheGauravsahu/jobhub',
			liveDemo: 'https://gauravjobhub.vercel.app/'
		}
	];

	// Return the project data as JSON
	return json(projects);
}
