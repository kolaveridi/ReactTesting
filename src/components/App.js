import React, { Component } from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import {connect} from 'react-redux';
import {Route,Link} from 'react-router-dom';

import * as actions from 'actions';

class App extends Component {
    renderButton (){
       if(this.props.auth){
           return(
               <button onClick={() => this.props.changeAuth(false)}>
                Sign Out
               </button>
           )
       }
       else{
           return(
             <button onClick={() => this.props.changeAuth(true)}>
               Sign in
             </button>
           );
       }
    }
    renderHeader(){
        return(
           <ul>
             <li>
              <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/post">Post a Comment </Link>
             </li>
             <li>{this.renderButton()}</li>
           </ul>
        );
    }
  render() {
    return (
      <div className="App">
        {this.renderHeader()}
         <Route path ="/post" component={CommentBox}/>
         <Route path="/" component={CommentList}/>
      </div>
    );
  }
}
function mapStateToProps(state){
    return{
        auth:state.auth
    };
}

export default connect(mapStateToProps,actions)(App);
