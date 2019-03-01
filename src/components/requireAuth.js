import React, {Component} from 'react';
import {connect} from 'react-redux';
export default (ChildComponent) =>{
   class ComposedComponent extends Component {
       componentDidMount(){
           this.shouldNavigateAway();
       }
       componentDidUpdate(){
          this.shouldNavigateAway();
       }
       shouldNavigateAway(){
           if(!this.props.auth){
               console.log('I need to leave');
           }
       }
       render(){
           console.log('hoc',this.props);
           return <ChildComponent  {...this.props}/>
       }
   }

   function mapStateToProps(state){
       return{
           auth:state.auth
       }
   }
   return  connect(mapStateToProps)(ComposedComponent);
}
