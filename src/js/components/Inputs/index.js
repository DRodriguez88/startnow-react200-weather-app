import { connect } from 'react-redux';
import Inputs from './Inputs';

function mapStoreToProps(store) {
    return { 
        single: store.single || {},
        history: store.history || []
    }
}

export default connect(mapStoreToProps)(Inputs);