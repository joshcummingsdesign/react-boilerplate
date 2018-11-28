import * as React from 'react';
import { Post, Image } from '../types';
import Loader from '../components/Loader';

export interface Props {
  post: Post;
  image?: Image;
  getApiData?: () => void;
}

class PostSingle extends React.Component<Props, {}> {
  componentDidMount() {
    const { props } = this;
    if (props.getApiData && !props.image) {
      props.getApiData();
    }
  }

  render() {
    const { props } = this;
    let imageComponent;
    if (props.image) {
      imageComponent = <img src={props.image.thumbnailUrl} alt={props.image.title} />;
    } else {
      imageComponent = <Loader />;
    }
    return (
      <div className="post-single">
        <h1>{props.post.title}</h1>
        <p>{props.post.body}</p>
        {imageComponent}
      </div>
    );
  }
}

export default PostSingle;
