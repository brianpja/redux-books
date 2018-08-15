import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import EditBook from './containers/edit-book';
import App from './components/app';
import reducers from './reducers';

//these do the same thing (create a store with middleware) using different syntax
// const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(logger)
));

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>
    <BrowserRouter>
        <div>
            <span>Header: Brian is smart</span>
            <Switch>
                <Route path='/edit/:id' component={EditBook} />
                <Route path='' component={App} />
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
