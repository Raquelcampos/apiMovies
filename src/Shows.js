import React, {Component} from 'react';
import axios from 'axios';

const myShows= axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=798bdf1b5ed80b1528b380e670ed6524&language=en-US&page=1"
})
export default class Shows extends Component{
     state={
        shows:[]
     }
    
    getShows= async()=>{
        const response = await myShows.get()
        const InfoShows = response.data.results.map(item=>{
            return{
                nome:item.name,
                sinopse:item.overview,
                
            }
        })
        this.setState({
            shows:InfoShows
        })
        console.log(response)
    }

    componentDidMount(){
        this.getShows()
    }

    render(){
        return(
            <div>
                <h1>POPULAR SHOWS</h1>
            <ul>{this.state.shows.map(item=>(
                <>
                <li>{item.nome}</li>
                <p>{item.sinopse}</p>
                </>
            ))}</ul>
            </div>
        )
    }
}