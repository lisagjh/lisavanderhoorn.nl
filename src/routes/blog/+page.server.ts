import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob('./*/+page.svx');

	const links = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const mod = await resolver();

			// Haal de mapnaam (slug) correct uit het pad
			const slug = path.split('/')[1]; // './css-carousels/+page.svx' -> 'css-carousels'

			return {
				href: `/blog/${slug}`,
				title: mod.metadata.title
			};
		})
	);

	return { links };
};
