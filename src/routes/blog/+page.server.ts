import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob('./posts/*.svx');

	const links = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const mod = await resolver();
			const fileName = path.split('/').pop()?.replace('.svx', '');
			return {
				href: fileName ? `/blog/${fileName}` : '#',
				title: mod.metadata.title
			};
		})
	);

	return { links };
};
