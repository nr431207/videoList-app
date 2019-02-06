import React, { Component } from 'react';
import './App.css';
import data from './data/data';
import Movies from './movies/movies';



const searchingFor = name => {
  return function(x){
    return x.title.toLowerCase().includes(name.toLowerCase());
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: window.data,
      name: ''
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  searchHandler(event){
    this.setState({name: event.target.value})
  }

  addItem(item){
    item.preventDefault();
    let newItem = this.NewMovie.value;
    // console.log(this.NewMovie)
    this.setState({
      movies: [ {title: newItem}]
    })

  }


  render() {
    const { name, movies } = this.state;
    return (
      <div class="container-fluid">
        <form class="p-2 mb-2">
          <input className="search" type="text" placeholder="Search..." onChange={this.searchHandler} value={name}/>
        </form>
        <form className="form-inline" onSubmit={(event) => {this.addItem(event)}}>
          <div className="form-group">
            <input ref = {input => this.NewMovie = input} type="text" placeholder="Add movie title here" className="form-control"/>
          </div>
          <button  type="submit" className="btn btn-primary">Add</button>
        </form>
        <h1 class="shadow p-3 mb-5 bg-white rounded">MovieList</h1>
        <div class="text-info">
          <table class="table table-bordered"> 
           {movies.filter(searchingFor(name)).map((name, index) => <Movies movie={name}/>)}
          </table> 
        </div>
       
      </div>
    );
  }
}

export default App;
