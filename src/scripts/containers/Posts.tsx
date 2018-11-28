import { connect } from 'react-redux';
import { StoreState } from '../types';
import Posts from '../components/Posts';

const mapStateToProps = (state: StoreState) => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(Posts);
