import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import SalePage from './pages/salePage/salePage.component';
import SubmitRequest from './pages/submit-requset/submit-request.component';
import Header from './components/header/header.component';
import SchoolInfo from './pages/school-info/school-info.component';
class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={SalePage}/> 
          <Route  exact path='/request' component={SubmitRequest}/> 
          <Route  exact path='/request/school-info' component={SchoolInfo}/>   
        </Switch>
      </div>
    );
  }
 
}

export default App;
