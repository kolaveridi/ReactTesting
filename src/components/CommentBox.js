import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';
class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
           comment:''
        };
    }
    handleChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({
            comment:''
        })
    }
    render(){
        console.log('child',this.props);
        return(
        <div className="fetch-comments">
           <form onSubmit ={this.handleSubmit}>
             <h4>Add a comment </h4>
             <textarea onChange ={this.handleChange} value={this.state.comment}/>
             <div>
                <button>Submit Comment </button>
             </div>
           </form>
             <button name='fetchbutton' onClick={this.props.fetchComments}>Fetch Comments </button>
           </div>
        );
    }
}

export default connect(null,actions)(requireAuth(CommentBox));
