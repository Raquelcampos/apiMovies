import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'

export const Title=styled.h1`
text-align:center;
`
export const InfoMovies=styled.div`
display:flex;
img{
    width:15%;
    height:200px;
    border:solid 1px;
    margin-bottom:10px;
}
div{
    width:70%;
    margin-left:8px;
}
`
const Movie= axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=798bdf1b5ed80b1528b380e670ed6524&language=en-US&page=1"
})
export default class Filmes extends Component{
    state={
        movies:[]
    }
    componentDidMount(){
       this.handleMovies()
    }
    
    handleMovies= async() =>{
        const response = await Movie.get()
        
        const infoFilmes= response.data.results.map(item=>{
            return{
                nome:item.title,
                sinopse:item.overview
            }
        })

        this.setState({ movies:infoFilmes})
    }

    render(){
        return(
            <div>
                <Title>POPULAR MOVIES</Title>
                
                <section>{this.state.movies.map(infos=>(
                
                <InfoMovies>
                    <img src="" alt="img-movie" />
                    <div>
                        <h2>{infos.nome}</h2>
                        <p>{infos.sinopse}</p>
                    </div>
                </InfoMovies>    
                ))}</section>
            </div>
        )
    }
}