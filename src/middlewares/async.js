export default ({dispatch}) => next => action  =>{
  // we check if the action ha s promise on its payload property
  //If it does wait for it to resolve
  //If it doesn't send it to the next middleware

   if(!action.payload || !action.payload.then){// if it has then it is a promise
          return next(action);
   }
   // We want for promise to resolve and then create a new action with that data and dispatch it

   action.payload.then(function(response){
       const newAction ={...action,payload:response};
       dispatch(newAction);
   });

};
