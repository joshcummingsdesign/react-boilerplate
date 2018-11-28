import * as React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/Search';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
