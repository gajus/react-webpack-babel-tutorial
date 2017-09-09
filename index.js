import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Aux from 'react-aux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class Foo extends Component {
  render () {
    return <div>
      FOO
    </div>;
  }
}

class Bar extends Component {
  render () {
    return <div>
      BAR
    </div>;
  }
}

const root = document.querySelector('#app');

const modal = undefined;

ReactDOM.render(<Router>
  <Aux>
    <Switch>
      <Route path='/' component={Foo} />
    </Switch>
    {modal}

    <Bar />
  </Aux>
</Router>, root);
