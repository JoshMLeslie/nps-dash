import {GetParksParams, GetParksResponse} from '../type/npsTypes';
import {axiosNPSInst, objToQuery} from './axios';

/** omitting params returns all parks, paginated by default values */
export const getParks = (
	params: GetParksParams = {}
): Promise<GetParksResponse> => {
	const url = objToQuery(params);
	return axiosNPSInst.get(url);
};
