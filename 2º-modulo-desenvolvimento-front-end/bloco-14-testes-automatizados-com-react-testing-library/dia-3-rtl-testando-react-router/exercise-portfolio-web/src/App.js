import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { AboutMe, ContactForm, Projects } from './components';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.renderRoutes = this.renderRoutes.bind(this);
    this.renderNavBar = this.renderNavBar.bind(this);
  }

  renderNavBar() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Sobre mim</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/contact">Entre em contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  renderRoutes() {
    return (
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>

        <Route path="/contact">
          <ContactForm />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route>
          <section>
            <h1>Página não encontrada</h1>
          </section>
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <div>
        {this.renderNavBar()}
        {this.renderRoutes()}
      </div>
    );
  }
}

export default App;
