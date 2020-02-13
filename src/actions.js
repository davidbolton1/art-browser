import Axios from 'axios';
export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';
export const RESULTS = 'RESULTS';
export const LOADING = 'LOADING';

export function asyncActionGetResults(query) {
	return (dispatch) => {
        dispatch(actionSearch(query));
        
        Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`)
        .then((results) => {
			dispatch(actionSearch('GREECE'));
			dispatch(actionResults(results.data.objectIDs));
		});
	};
}

export function actionLoading(isLoading) {
	return {
		type: LOADING,
		padyload: {
			isLoading
		}
	};
}

export function actionSearch(query) {
	return {
		type: SEARCH,
		payload: {
			query
		}
	};
}
export function actionResults(results) {
	return {
		type: RESULTS,
		payload: {
			results
		}
	};
}

export function actionSelect(id) {
	return {
		type: SELECT,
		payload: {
			id
		}
	};
}
