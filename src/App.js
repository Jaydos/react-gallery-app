import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';

//Components
import Header from './components/Header';

// Api Key
import key from './config.js';

class App extends Component {

  constructor () {
    super();

    this.state = {
      pictures: [],
      searchTag: '',
      isLoading: true
    }
  }

  resetState = () => {
    this.setState({
      pictures: [],
      searchTag: '',
      isLoading: true
    })
  }

    fetchData = (query) => {
      this.resetState();
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          pictures: jsonData.photos.photo,
          searchTag: query,
          isLoading: false}
          )
      })
      .catch(err => {
        console.log('Error retrieving data', err);
      })
    }

    componentDidMount() {
      this.fetchData('cats');
    }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header searchFunc={this.fetchData}></Header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
