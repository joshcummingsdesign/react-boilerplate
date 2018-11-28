import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {
  searchTerm?: string;
  handleSearchTermChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

class Search extends React.Component<Props, {}> {
  goToSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.props.history.push('/posts');
  };

  render() {
    const { props } = this;
    return (
      <div className="search">
        <h1>Search for a Post</h1>
        <form onSubmit={this.goToSearch}>
          <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
