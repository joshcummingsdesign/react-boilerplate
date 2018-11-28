import * as moxios from 'moxios';
import { setSearchTerm, addApiData, getApiDataThunk } from '../actions';
const image = require('../__mocks__/images.json')[0];

test('setSearchTerm', () => {
  expect(setSearchTerm('qui')).toMatchSnapshot();
});

test('addApiData', () => {
  expect(addApiData(image)).toMatchSnapshot();
});

test('getApiDataThunk', done => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getApiDataThunk(image.id)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: image
        })
        .then(() => {
          expect(request.url).toEqual(`https://jsonplaceholder.typicode.com/photos/${image.id}`);
          expect(dispatchMock).toBeCalledWith(addApiData(image));
          done();
        });
    });
  });
});
