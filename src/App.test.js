import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import Root from 'root';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <App />,
       div);

  //expect(div.innerHTML).toContain('This is heading');

  ReactDOM.unmountComponentAtNode(div);
});
