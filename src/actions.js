export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';
export const RESULTS = 'RESULTS';
export const LOADING = 'LOADING'


export function actionLoading(isLoading) {
    return {
        type: LOADING,
        padyload: {
            isLoading
        }
    }
}

export function actionSearch(query) {
    return {
        type: SEARCH, 
        payload: {
            query
        }
    }
}
export function actionResults(results) {
    return {
        type: RESULTS, 
        payload: {
            results
        }
    }
}

export function actionSelect(id) {
    return {
        type: SELECT,
        payload: {
            id
        }
    }
}