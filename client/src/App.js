import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from'./containers/landingPage/landingPage';
import HistoryPage from './containers/history/history';
import Philosophy from './containers/philosophy/philosophy';
import Styles from './containers/styles/styles';
import Video from './containers/video/video';
import AppTitle from './components/appTitle/appTitle';
import Contact from './containers/contact/contact';
import './App.css';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
      <div className="App">
        <AppTitle />
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/history" component={HistoryPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/video" component={Video} />
          </Switch>
        </Router>
      </div>
      </StyleRoot>
    );
  }
}

export default App;
