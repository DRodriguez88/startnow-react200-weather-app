import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return { 
        cityData: store.cityData
    }
}

export default connect(mapStoreToProps)(SearchHistory);