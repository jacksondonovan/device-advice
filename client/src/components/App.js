import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const One = () => {
  return <div>Cool Styff</div>
}

const Two = () => {
  return <div>Dumb stustuss</div>
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={One} />
          <Route path="/two" exact component={Two} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
