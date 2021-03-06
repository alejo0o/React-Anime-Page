import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AnimePage from './pages/Anime';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/anime/:id' component={AnimePage} />
    </Switch>
  );
};

export default Router;
