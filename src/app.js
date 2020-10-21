import React, { Component } from 'react';  
import {BrowserRouter} from 'react-router-dom';  
import Header from './Headerbar';
import Routes from './routes'; 
import Sidebar from './components/Sidebar'; 
 

class App extends Component {

  
  render() {

      return ( 
          <BrowserRouter  >  
              <div className="App"> 
                  <div className="Homepage">   
                  <Header/>
                  <Sidebar/>
                  </div>
                  < Routes />
              </div> 
          </BrowserRouter>
      );
  }
} 
export default App;
