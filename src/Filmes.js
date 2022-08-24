import React, {Component} from 'react'
import axios from 'axios'
import styled, { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    background:black;
    color:white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
export const Title=styled.h1`
text-align:center
`

 export const InfoMovies=styled.div`

   border:solid 1px dimgray; 
   border-radius:15px;
   margin:8% 15% 8% 15% ;
   width:70%;
   height:250px;
   box-shadow: 10px 5px 5px white;
   
   display:flex;
   align-items:center;
   justify-content: space-evenly;

img{
    width:20%;
    height:70%;
}

`
export const Caracteres =styled.section`
    display:flex;
    flex-direction:column;
    width:50%;
   
    
button{
    width:150px; 
    border: solid 1px dimgray; 
    border-radius:10px;
    margin-left:15px;
    cursor:pointer;
}
h2{
    margin-bottom:10px;
}
`
const Movie= axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=798bdf1b5ed80b1528b380e670ed6524&language=en-US&page=1"
})
export default class Filmes extends Component{
    state={
        movies:[],
        aparecer:false
    }
    componentDidMount(){
       this.handleMovies()
    }
    
    handleMovies= async() =>{
        const response = await Movie.get()
        
        const infoFilmes= response.data.results.map(item=>{
            return{
                nome:item.title,
                sinopse:item.overview,
                imagem: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
            }
        })

        this.setState({ movies:infoFilmes})
    }
    appear= ()=>{

        this.setState({
            aparecer:true
        })
    }

    render(){
        return(
            <div>
                 <GlobalStyle/>
                <Title>POPULAR MOVIES</Title>
                
                <section>{this.state.movies.map(infos=>(
                
                <InfoMovies>
                    <img src={infos.imagem} alt={infos.nome} />
                    <Caracteres>
                        <h2>{infos.nome}</h2>
                        { this.state.aparecer && <p>{infos.sinopse}</p>}
                    
                        <div>
                            <button>ASSISTIR</button>
                            <button onClick={()=>{this.appear()}}>SINOPSE</button>
                        </div>
                     </Caracteres>    
                    
                </InfoMovies>    
                ))}</section>
            </div>
        )
    }
}