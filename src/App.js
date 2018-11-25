import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
       		<header>
		  		<nav>
		  			<Link to='/' className="navBar">Landing </Link>
		  			<Link to='/library' className="navBar"> Library</Link>
		  		</nav>
		  		<h1 id="mainHeader"> Bloc Jams </h1>
		  </header>
         <main>
		  	<Route exact path="/" component={Landing} />
			<Route path="/library" component={Library} />
			<Route path="/album/:slug" component={Album} />
		  </main>
      </div>
    );
  }
}

//fix bad merge
export default App;
