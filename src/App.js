import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
// import LoginPage from './containers/LoginPage/LoginPage';
import HomePage from './containers/HomePage/HomePage';
import ExplorePage from './containers/ExplorePage/ExplorePage';
import ProfilePage from './containers/ProfilePage/ProfilePage';



class App extends Component {
  render(){
     return(
        <div>
          <Layout>
            <Switch>
              <Route path="/explore" component={ExplorePage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/" exact component={HomePage} />
            </Switch>
          </Layout>
        </div>
     )
  }
};

export default App;
