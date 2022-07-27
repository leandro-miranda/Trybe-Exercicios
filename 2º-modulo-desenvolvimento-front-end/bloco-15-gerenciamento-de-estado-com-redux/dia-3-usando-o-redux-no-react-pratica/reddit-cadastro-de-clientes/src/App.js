import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import store from './redux/store';
import Home from '.pages/Home';
import Login from '.pages/Login';
import Register from '.pages/Register';
import CostumersList from '.pages/CostumersList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact patch='/' component={Home} />
            <Route patch='/login' component={Login} />
            <Route patch='/register' component={Register} />
            <Route patch='/costumers' component={CostumersList} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

