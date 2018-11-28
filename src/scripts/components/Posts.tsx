import * as React from 'react';
import { Post } from '../types';
import PostCard from './PostCard';

interface Props {
  posts: Post[];
  searchTerm: string;
}

const Posts = (props: Props) => (
  <div className="posts">
    <h1>You Searched for {props.searchTerm}</h1>
    {props.posts.filter(post => post.title.toUpperCase().includes(props.searchTerm.toUpperCase())).map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default Posts;
