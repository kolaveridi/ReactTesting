import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from 'reducers';

export default ({children,initialState={}}) => {
    console.log('initialState',initialState)
    return(
       <Provider store ={createStore(reducers,initialState)}>
        {children}
       </Provider>

    );
}
