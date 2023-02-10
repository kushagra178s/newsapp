//before infiniteScroll
import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import About from "./components/About";

export default class App extends Component {
  pageSize = 5;
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height = {2}
            color='#f11946'
            progress={this.state.progress}
            totol = {1}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress = {this.setProgress} key='general' pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route exact path='/about' element={<About key='about' />}></Route>
            <Route exact path='/business' element={<News setProgress = {this.setProgress} key='business' pageSize={this.pageSize} country='us' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} key='entertainment' pageSize={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress = {this.setProgress} key='health' pageSize={this.pageSize} country='us' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress = {this.setProgress} key='science' pageSize={this.pageSize} country='us' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress = {this.setProgress} key='sports' pageSize={this.pageSize} country='us' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress = {this.setProgress} key='technology' pageSize={this.pageSize} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
