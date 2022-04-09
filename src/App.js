import React, {Component} from 'react';
import { CardList } from './components/cardlist/cardlist.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      superheroes: [],
      filteredSuperheroes: "",
      search: "",
      searchvalue: ""
    };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
        'X-RapidAPI-Key': '3fd2412a91msh6dd2dfc51847be9p1716d3jsn8d6f885b697b'
      }
    };

    fetch('https://superhero-search.p.rapidapi.com/api/heroes', options)
    .then(response => response.json())
    .then((heroes) => this.setState({superheroes: heroes}))
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  searchSuperheroes()
  {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
        'X-RapidAPI-Key': '3fd2412a91msh6dd2dfc51847be9p1716d3jsn8d6f885b697b'
      }
    };
    
    fetch('https://superhero-search.p.rapidapi.com/api/?hero='+this.state.search, options)
      .then(response => response.json())
      .then((searchheroes) => this.setState({filteredSuperheroes: searchheroes}))
      .then(() => this.setState({searchvalue: this.state.search}))
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  render(){
    return(
      <div className="App">
        <h1>Superheroes</h1>

        <h2>Search for a Superhero</h2>
        <input type='search' placeholder='search for superheroes' onChange={e => this.setState({search: e.target.value})} onKeyPress={(e) => e.key === 'Enter' && this.searchSuperheroes()}/>
        <input type='submit' value={"Search"} onClick={() => this.searchSuperheroes()}/>
        
        <CardList search={this.state.searchvalue} filtered={true} superheroes={this.state.filteredSuperheroes}/>

        <hr/>

        <h2>20 Random Superheroes</h2>
        <CardList superheroes={this.state.superheroes}/>
      </div>
    );
  }
}

export default App;
