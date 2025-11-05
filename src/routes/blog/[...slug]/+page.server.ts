import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	// Glob alle .svx posts vanaf de root van blog folder
	const modules = import.meta.glob('../posts/*.svx');

	// Vind het juiste bestand
	const matchEntry = Object.entries(modules).find(([path]) =>
		path.endsWith(`${params.slug}.svx`)
	);

	if (!matchEntry) throw error(404, 'Post not found');

	const mod = await matchEntry[1]();

	return {
		post: mod.default,
		metadata: mod.metadata
	};
};
