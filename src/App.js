import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data'


function searchingFor(name){
  return function(x){
    return x.title.toLowerCase().includes(name.toLowerCase()) || !name;
  }
}

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
    let {movies} = this.state;
    let newItem = this.NewMovie.value;
    this.setState({
      // movies: [...this.state.movies, {title: newItem}]

      movies: [ {title: newItem}]



    })

    
    // this.setState({
      // movies: items
    // })
    // movies = {title: 'test'}

  }


  render() {
    const {name, movies} = this.state;
    return (
      <div class="container-fluid">
      
      <form class="p-2 mb-2">
        <input className="search" type="text" placeholder="Search..."
            onChange={this.searchHandler}
            value={name}  
        />
      </form>

      <form className="form-inline" onSubmit={(event) => {this.addItem(event)}}>
        <div className="form-group">
          
          <input ref = {input => this.NewMovie = input} type="text" placeholder="Add movie title here" className="form-control" id="newItemInput" />
        </div>
        <button  type="submit" className="btn btn-primary">Add</button>
      </form>

      <h1 class="shadow p-3 mb-5 bg-white rounded">MovieList</h1>
      
      <div class="text-info">
      <table class="table table-bordered"> 
       {movies.filter(searchingFor(name)).map((name, index) =>
          
             <tr><td>
               <div key={movies.index}>
                 <h2> {name.title}</h2>
               </div>
             </td></tr>
        )}
       </table> 
       </div>
       
      </div>
    );
  }
}

export default App;
