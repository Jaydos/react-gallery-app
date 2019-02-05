import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  //Switch
} from 'react-router-dom';
import './App.css';

//Styles
import "./css/index.css"

//Components
import Header from './components/Header';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
/* import Error from './components/Error'; */


// Api Key
import key from './config.js';

class App extends Component {

  constructor () {
    super();

    this.state = {
      pictures: [],
      searchTag: '',
      hasSearched: false,
      isLoading: true,
      staticLoading: true
    }

    this.staticPics = {
      pictures : {
        cats: {
          pictures: [],
          searchTag: 'cats'
        },
        dogs: {
          pictures: [],
          searchTag: 'dogs'
        },
        birds: {
          pictures: [],
          searchTag: 'birds'
        },
      }
    }
  }


  resetLoadState = () => {
    this.setState({
      pictures: [],
      searchTag: '',
      hasSearched: false,
      isLoading: true
    })
  }

    fetchData = (query) => {
      this.resetLoadState();
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          pictures: jsonData.photos.photo,
          searchTag: query,
          hasSearched: true,
          isLoading: false
        })
          
      })
      .catch(err => {
        console.log('Error retrieving data', err);
      })
    }
 
    componentDidMount() {
      Promise.all([
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=cats&per_page=24&format=json&nojsoncallback=1`),
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=dogs&per_page=24&format=json&nojsoncallback=1`),
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=birds&per_page=24&format=json&nojsoncallback=1`)
      ])
    .then(res => {
      Promise.all(res.map(response => response.json())
    )
    .then(jsonData => {
      this.staticPics.pictures.cats.pictures = jsonData[0].photos.photo
      this.staticPics.pictures.dogs.pictures = jsonData[1].photos.photo
      this.staticPics.pictures.birds.pictures = jsonData[2].photos.photo

      this.setState({
        staticLoading: false
      })
    })
  })
    .catch(err => {
      console.log('Oopsie Woopsie', err)
  })
  }

  render() {
    return (
      <BrowserRouter>
        
        <div className="container">
          <Header searchFunc={this.fetchData}></Header>
          <Route exact path="/" component={Welcome}></Route>
           
          {this.state.staticLoading
          ? 
          null
          :
          <div>

          
            <Route exact path="/cats" component={() => <Gallery data={this.staticPics.pictures.cats}></Gallery>}></Route>         
            <Route exact path="/dogs" component={() => <Gallery data={this.staticPics.pictures.dogs}></Gallery>}></Route>
            <Route exact path="/birds" component={() => <Gallery data={this.staticPics.pictures.birds}></Gallery>}></Route>
            </div>
          }

          <Route path="/search=:query" component={() => <Gallery data={this.state}></Gallery>}></Route>
          

        
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
