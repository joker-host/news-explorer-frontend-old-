import './App.css';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';

import React from 'react';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="body">
      <Switch>
        <Route path="/main">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/saved-news">
          <Header />
          <SavedNews />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
