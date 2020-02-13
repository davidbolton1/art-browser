import {
    connect
} from 'react-redux';
import ArtSearch from '../components/ArtSearch';
import { actionSearch, actionResults, actionLoading } from '../actions';
import Axios from 'axios';


function mapDispatchToProps(dispatch) {
    return {
        handleClick: async () => {
            const results= await Axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=greece')
            console.log(results)
            dispatch(actionLoading(true))
            dispatch(actionSearch(
                'GREECE'
            ));
            dispatch(actionResults(results.data.objectIDs));
            dispatch(actionLoading(false))
        }
    }
}


const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(ArtSearch);