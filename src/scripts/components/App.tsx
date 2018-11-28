import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Post } from '../types';
import store from '../store';
import Search from '../containers/Search';
import Posts from '../containers/Posts';
import PostSingle from '../containers/PostSingle';
import NotFound from './NotFound';
const posts = require('../__mocks__/posts.json');

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/posts" component={() => <Posts posts={posts} />} />
          <Route
            path="/posts/:id"
            component={(props: RouteComponentProps<{ id: string }>) => {
              const selectedPost = posts.find((post: Post) => props.match.params.id === post.id.toString());
              return <PostSingle post={selectedPost} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(App);
