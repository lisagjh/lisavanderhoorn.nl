import { VITE_GOOGLE_SHEETS_API_KEY, VITE_SHEET_ID, VITE_SHEET_NAME } from '$env/static/private';

function getCoverUrl(isbn) {
	if (!isbn) {
		return '';
	}
	const cleanIsbn = isbn.replace(/[-\s]/g, '');

	return `https://covers.openlibrary.org/b/isbn/${cleanIsbn}-M.jpg`;
}

export async function load() {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${VITE_SHEET_ID}/values/${VITE_SHEET_NAME}?key=${VITE_GOOGLE_SHEETS_API_KEY}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Failed to fetch books');
		}

		const data = await response.json();
		const rows = data.values;

		// Eerste rij zijn headers
		const headers = rows[0].map((header) => header.replace(/\s/g, '_'));
		const books = rows.slice(1).map((row) => {
			const book = {};
			headers.forEach((header, index) => {
				book[header] = row[index] || '';
			});
			return book;
		});

		books.forEach((book) => {
			book.coverUrl = getCoverUrl(book['ISBN/UID']);
		});

		return {
			books
		};
	} catch (error) {
		console.error('Error fetching books:', error);
		return {
			books: [],
			error: error.message
		};
	}
}
