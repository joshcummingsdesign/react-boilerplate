import * as React from 'react';
import { shallow } from 'enzyme';
import PostSingle from '../components/PostSingle';
const posts = require('../__mocks__/posts.json');
const images = require('../__mocks__/images.json');

test('PostSingle renders correctly', () => {
  const component = shallow(<PostSingle post={posts[0]} image={images[0]} />);
  expect(component).toMatchSnapshot();
});
