import * as React from 'react';
import { shallow } from 'enzyme';
import Posts from '../components/Posts';
import PostCard from '../components/PostCard';
const posts = require('../__mocks__/posts.json');

test('Posts renders correctly', () => {
  const component = shallow(<Posts posts={posts} searchTerm="" />);
  expect(component).toMatchSnapshot();
});

test('Posts should render correct amount of shows', () => {
  const component = shallow(<Posts posts={posts} searchTerm="" />);
  expect(component.find(PostCard).length).toEqual(posts.length);
});
