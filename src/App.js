//before infiniteScroll
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import About from "./components/About";
import Example from "./components/Example";
import FullNews from "./components/FullNews";

const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height = {2}
            color='#f11946'
            progress={progress}
            totol = {1}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress = {setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route exact path='/business' element={<News setProgress = {setProgress} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress = {setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress = {setProgress} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress = {setProgress} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress = {setProgress} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress = {setProgress} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/fullnews' element={<FullNews/>}></Route>
          </Routes>
        </Router>
      </div>
    )
}
export default App /*yoyo*/