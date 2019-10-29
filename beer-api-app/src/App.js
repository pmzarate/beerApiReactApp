
import React, {Component} from 'react';
import './App.css';
import LikeButton from './likebutton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'beers' : [],
    };
  }
      
componentDidMount() {
  this.fetchData();
  }

fetchData() {
   fetch('https://api.punkapi.com/v2/beers')
   .then (results =>results.json())
   .then (results=> this.setState({
     'beers': results}
    ))
    .catch(error => console.log("error", error))
  }

render() {
    return (
      <div >
          <header>
            <h1> Beer Listing </h1>
          </header>
        <ul> 
            {this.state.beers.map(function(beer,index) {
          return (
            <div key = {index}>
                  <br/>
                  <br/>
                  <h1>{beer.name}</h1>
                  <img src = {beer.image_url} alt = "beer_image" width="100" height="290"/>
                  <h2>"{beer.tagline}"</h2> <br/>
                  <p> {beer.description} <br/></p>
                  <h4>First Brewed: {beer.first_brewed}</h4>
                  <h5>Foods to Pair with: <ul>{beer.food_pairing}</ul></h5>
                  <LikeButton/>
                <br/>
                <br/>
            </div>
          )})
          }
        </ul>
    </div>
  );
}}

export default App;