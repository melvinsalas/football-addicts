import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Match, Switch } from 'react-router-dom';
import { Home, League, Team } from './js/containers';
import '../node_modules/mdi/scss/materialdesignicons.scss';

require('./scss/app.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/league/:id' component={League} />
          <Route path='/team/:league/:id' component={Team} />
        </Switch>
      </BrowserRouter>
    )
  }
};

render(<App />, document.getElementById('root'));
