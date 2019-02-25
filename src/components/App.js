import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentBox/>
        <CommentList/>
      </div>
    );
  }
}

export default App;
