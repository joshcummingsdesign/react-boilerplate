import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from '../types';
import { SetSearchTermAction, setSearchTerm } from '../actions/';
import Search from '../components/Search';

const mapStateToProps = (state: StoreState) => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch: Dispatch<SetSearchTermAction>) => ({
  handleSearchTermChange(e: React.FormEvent<HTMLInputElement>) {
    dispatch(setSearchTerm(e.currentTarget.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
