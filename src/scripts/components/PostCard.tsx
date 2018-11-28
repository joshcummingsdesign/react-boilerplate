import * as React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface Props {
  post: Post;
}

class PostCard extends React.Component<Props, {}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { props } = this;
    const url = `/posts/${props.post.id}`;
    return (
      <div className="post-card">
        <Link to={url}>{props.post.title}</Link>
      </div>
    );
  }
}

export default PostCard;
