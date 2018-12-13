import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostCreate from './posts/PostCreate';
import PostDelete from './posts/PostDelete';
import PostEdit from './posts/PostEdit';
import PostList from './posts/PostList';
import PostShow from './posts/PostShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={PostList} />
          <Route path="/posts/delete" exact component={PostDelete} />
          <Route path="/posts/edit" exact component={PostEdit} />
          <Route path="/posts/new" exact component={PostCreate} />
          <Route path="/posts/show" exact component={PostShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
