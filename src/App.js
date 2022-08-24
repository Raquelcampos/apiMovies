import React, {Component} from 'react'
import Filmes from "./Filmes"
import Home from "./Home"
import Erro from "./Erro"
import Shows from "./Shows"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



export default class App extends Component{
    render(){
        return(
          
               
            <Router>
                
            <Home/>
            <div>
             <Link to='/filmes'><h3>MOVIES</h3></Link>
             <Link to='/shows'><h3>SERIES</h3></Link>
            </div>
              
              <Routes>
               <Route path='/shows' element={<Shows/>}/>
               <Route path='/filmes' element={<Filmes/>}/>
               <Route path='*' element={<Erro/>}/>
              </Routes>
         </Router>
        

        )
    }
}