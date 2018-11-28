import reducers from '../reducers';
const images = require('../__mocks__/images.json');

test('SET_SEARCH_TERM', () => {
  const state = reducers({ searchTerm: '', apiData: {} }, { type: 'SET_SEARCH_TERM', payload: 'qui' });
  expect(state).toEqual({ searchTerm: 'qui', apiData: {} });
});

test('ADD_API_DATA', () => {
  const index = 0;
  const key = index + 1;
  const imageData = images[index];
  const state = reducers(
    { searchTerm: 'qui', apiData: {} },
    {
      type: 'ADD_API_DATA',
      payload: imageData
    }
  );
  expect(state).toEqual({
    searchTerm: 'qui',
    apiData: {
      [key]: imageData
    }
  });
});
