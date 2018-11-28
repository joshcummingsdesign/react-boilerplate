import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../types';
import { getApiDataThunk } from '../actions';
import PostSingle, { Props } from '../components/PostSingle';

const mapStateToProps = (state: StoreState, ownProps: Props) => ({ image: state.apiData[ownProps.post.id] });

const mapDispatchToProps = (dispatch: ThunkDispatch<void, null, null>, ownProps: Props) => ({
  getApiData() {
    dispatch(getApiDataThunk(ownProps.post.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSingle);
