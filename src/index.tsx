import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/containers/App';

const container = document.getElementById('app');
const render = () => {
  ReactDOM.render(<App />, container);
};
render(); //initial render
if (module.hot) {
  module.hot.accept('./components/containers/App.tsx', () => {
    render();
  });
}
