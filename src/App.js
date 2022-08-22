import React, {Component} from 'react'
import Filmes from "./Filmes"
import Shows from "./Shows"

export default class App extends Component{
    render(){
        return(
            <div>
              <Filmes/>
              <Shows/>
            </div>
        )
    }
}