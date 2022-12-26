import {Park} from './npsPark';

/**
 * @param sort Properties to sort the results by. Each resource identifies which properties are 'sortable’. Ascending order is assumed for each property. If descending order is desired, the unary negative should prefix the property name. The sortable properties are listed in the documentation for each resource. Invalid property values will be ignored. Default value is fullName.
 */
export interface GetParksParams {
	limit?: number; // pagination - default 50
	parkCode?: string[]; // 4-10 char code
	q?: string; // search term
	sort?: string[];
	start?: number; // pagination - default 0
	stateCode?: string[]; // 2 letter code
}

/** strings are all numeric */
export interface GetParksResponse {
	data: Park[];
	limit: string;
	start: string;
	total: string;
}
