// import React from 'react';

// import App from './pages/App'

// import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './rootReducer';
// import setAuthorizationToken from './utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
// //import { setCurrentUser } from './actions/authActions';


// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );

// // if (localStorage.jwtToken) {
// //   setAuthorizationToken(localStorage.jwtToken);
// //   store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
// // }

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={App} />
//   </Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App'
//import Test from './pages/Test'
//import Dispatcher from './pages/dispatcher/Dispatcher'

ReactDOM.render(<App
   />,
  document.getElementById('root')
);