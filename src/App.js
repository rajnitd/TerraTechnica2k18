import React, { Component } from 'react';
import { Router, Route,hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './static/stars1.gif';
import './App.css';


// Components Modules
import Basic from './basic.js'
// import NavBar from './components/navbar'
// import Footer from './components/footer'
// import OpenMenu from './components/openmenu'
// import MenuButton from './components/menubutton'
// Pages Modules
import Home from './pages/home/home'
import Events from './pages/events/events'
import Team from './pages/team/team.js'
import NotFound from './notfound.js'
import OpenEvent from './pages/events/event/openevent.js'
import Forms from './pages/events/event/forms.js'

import Contact from './pages/contact/contact.js'
import Canvas from './components/canvas_2d.js'
import Lectures from './pages/Lectures/lectures'
import Workshops from './pages/workshop/workshops.js'
const styles={
  // backgroundImage:`url(${logo})`
}
// Parent Component
class App extends Component {
  render() {
    return (
      <div className="App" style={styles}>
             <MuiThemeProvider>
                  <div>
                    <Router history={hashHistory}>
                      <Route path="/home"component={Basic}>
                           <Route path="/" component={Home}/>
                           <Route path="/events" component={Events}/>
                           <Route path="/team" component={Team}/>
                           <Route path="/events/robotics/:id" component={OpenEvent}/>
                           <Route path="/events/coding/:id" component={OpenEvent}/>
                           <Route path="/events/informal/:id" component={OpenEvent}/>
                           <Route path="/events/miscellaneous/:id" component={OpenEvent}/>
                           <Route path="/register" component={Forms}/>
                           <Route path="/contactus" component={Contact}/>
                           <Route path="/workshops" component={Workshops}/>
                           <Route path="/lectures" component={Lectures}/>
                       </Route>
                       <Route path="*" component={NotFound}/>
                    </Router>
                  </div>
             </MuiThemeProvider>
             <Canvas/>
      </div>
    );
  }
}

export default App;
