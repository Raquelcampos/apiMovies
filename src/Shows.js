import React, {Component} from 'react';
import axios from 'axios';
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

 export const InfoShows=styled.div`

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

const myShows= axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=798bdf1b5ed80b1528b380e670ed6524&language=en-US&page=1"
})
export default class Shows extends Component{
     state={
        shows:[],
        aparecer:false
     }
    
    getShows= async()=>{
        const response = await myShows.get()
        const InfoShows = response.data.results.map(item=>{
            return{
                nome:item.name,
                sinopse:item.overview,
                image:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
                
            }
        })
        this.setState({
            shows:InfoShows
        })
        console.log(response)
    }
    appear= ()=>{

        this.setState({
            aparecer:true
        })
    }
      
    componentDidMount(){
        this.getShows()
    }

    render(){
        return(
            <div>
                 <GlobalStyle/>
                <Title>POPULAR SERIES</Title>
            <ul>{this.state.shows.map(item=>(
                <InfoShows>
                    <img src={item.image} alt={item.nome} />
                    <Caracteres>
                    <h2>{item.nome}</h2>
                   { this.state.aparecer && <p>{item.sinopse}</p>}  
                    <div>
                    <button>ASSISTIR</button>
                    <button onClick={()=>{this.appear()}}>SINOPSE</button>
                    </div>
                    </Caracteres>
                </InfoShows>
            ))}</ul>
            </div>
        )
    }
}