export interface NpsObject {
	id: string; // hexadecimal
	name: string;
}

export const weekOrder: readonly string[] = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
];
/**
 * consider the values arbitrary
 * e.g.
 * - "Sunrise to Sunset"
 * - "All day"
 * - "Closed"
 * - "9:00AM - 5:00PM"
 */
export interface NpsCalendar {
	sunday: string;
	monday: string;
	tuesday: string;
	wednesday: string;
	thursday: string;
	friday: string;
	saturday: string;
}

export interface NpsImage {
	altText: string;
	caption: string;
	credit: string;
	title: string;
	url: string;
}
