import React from "react";
import axios from "axios";
import styled, { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
export const Title=styled.h1`

font-family: sans-serif;
`

const FilmesAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=798bdf1b5ed80b1528b380e670ed6524&language=en-US&page=1`
});
export default class App extends React.Component {
  state = {
    movies: [],
    shows:['serie1','serie2','serie3'],
    movieFiltrado : []
  };


  addFilmes = async () => {
    const resposta = await FilmesAPI.get();
    const api = resposta.data.results.map((item) => {
      return {
        title: item.title,
        image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      movies: api
    });
  };


filterMovies = (event)=>{
  const MovieFilter = this.state.movies.filter(item =>{
    if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
     return true
    }
  })

  this.setState({movieFiltrado: MovieFilter})
  if(event.target.value === ''){
    this.setState({movieFiltrado:[]})
  }
}


  componentDidMount() {
    this.addFilmes();
  }
  render() {
    return (
      <div>
         <GlobalStyle/>
        <Title>Filmes em alta:</Title>
        <input onChange={this.filterMovies}/>
        <ol>
          {this.state.movieFiltrado.map((item) => (
            <>
              <li>{item.title}</li> 
              <img src={item.image} alt={`Poster do filme ${item.title}`} /> 
            </>
          ))}
        </ol>
      </div>
    );
  }
}
