


import React, { Component  } from 'react'
import Navbar from './components/Navbar'
import News from './components/news'
import { BrowserRouter as Router,
  Routes,
 Route,
 
} from "react-router-dom";



export default class App extends Component {
  

  render() {
    
    return (
      <Router basename='/reactapp'>
          <Navbar />
      <div >  
        <Routes>
          <Route exact path='/' element={<News  key=""  pagesize={5} country="in" category="general"/>}/>
          <Route exact  path='/business' element={<News key="business" pagesize={5} country="in" category="business"/>}/>
          <Route exact  path='/health' element={<News key="health" pagesize={5} country="in" category="health"/>}/>
          <Route exact  path='/sports' element={<News key="sports" pagesize={5} country="in" category="sports"/>}/>
          <Route exact  path='/entertainment' element={<News key="entertainment" pagesize={5} country="in" category="entertainment"/>}/>
          <Route exact  path='/science' element={<News key="science" pagesize={5} country="in" category="science"/>}/>
          <Route exact  path='/technology' element={<News key="technology" pagesize={5} country="in" category="technology"/>}/>
          
        </Routes>
    
       
      </div>
      </Router>
    )
  }
}

