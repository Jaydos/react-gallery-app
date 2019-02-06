import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

//Styles
import "./css/index.css"

//Components
import Header from './components/Header';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import Error from './components/Error';

// Api Key
import key from './config.js';

class App extends Component {

  constructor () {
    super();
    
    // Initialise state
    this.state = {
      pictures: [],
      searchTag: '',
      isLoading: true 
    }

    // Initialise static pictures object to fill in later
    this.staticPics = {
      pictures : {
        cats: {
          pictures: [],
          searchTag: 'cats',
          isLoading: true
        },
        dogs: {
          pictures: [],
          searchTag: 'dogs',
          isLoading: true
        },
        birds: {
          pictures: [],
          searchTag: 'birds',
          isLoading: true
        },
      }
    }
  }

  // Reset state function
  resetLoadState = () => {
    this.setState({
      pictures: [],
      searchTag: '',
      isLoading: true
    })
  }

  fetchDynamicData = (query) => {
    // Reset state so Components aren't loaded with wrong/incomplete data
    this.resetLoadState();
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then(jsonData => {
      this.setState({
        pictures: jsonData.photos.photo,
        searchTag: query,
        isLoading: false
      })        
    })
    .catch(err => {
      console.log('Error retrieving data', err);
    })
  }

  // Function to fetch default static data (cats, dogs, birds) and update staticPics object
  fetchStaticData = () => {
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
        this.staticPics.pictures.cats.isLoading = false

        this.staticPics.pictures.dogs.pictures = jsonData[1].photos.photo
        this.staticPics.pictures.dogs.isLoading = false

        this.staticPics.pictures.birds.pictures = jsonData[2].photos.photo
        this.staticPics.pictures.birds.isLoading = false
      })
    })
    .catch(err => {
      console.log('Oopsie Woopsie', err)
    })
  }
  
  componentDidMount() {
    this.fetchStaticData()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">      
          <Header searchFunc={this.fetchDynamicData}></Header>
          {/* Router switch for handling unknown routes */}
          <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route exact path="/cats" component={() => <Gallery data={this.staticPics.pictures.cats}></Gallery>}></Route>         
          <Route exact path="/dogs" component={() => <Gallery data={this.staticPics.pictures.dogs}></Gallery>}></Route>
          <Route exact path="/birds" component={() => <Gallery data={this.staticPics.pictures.birds}></Gallery>}></Route>
          <Route path="/search=:query" component={() => <Gallery data={this.state}></Gallery>}></Route>
          <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
