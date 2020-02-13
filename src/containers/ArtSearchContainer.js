import {
    connect
} from 'react-redux';
import ArtSearch from '../components/ArtSearch';
import { actionSearch, actionResults, actionLoading, asyncActionGetResults } from '../actions';
import Axios from 'axios';



function mapDispatchToProps(dispatch) {
    return {
        handleClick: async () => {
            dispatch(asyncActionGetResults('rabbit'))
        }
    }
}


const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(ArtSearch);