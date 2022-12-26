import axios from 'axios';

export const objToQuery = <O extends object>(o: O): string => {
	return Object.entries(o).reduce((acc, [k, v]) => {
		acc += acc.length ? '&' : '?';
		let val = v;
		if (Array.isArray(v)) {
			val = v.join()
		}
		acc += `${k}=${val}`;
		return acc;
	}, '');
};

const NPS_URL = 'https://developer.nps.gov/api/v1/parks';
export const axiosNPSInst = axios.create({
	baseURL: NPS_URL,
	headers: {
		'X-Api-Key': process.env.NPS_API,
	},
});
