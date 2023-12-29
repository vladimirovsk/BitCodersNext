import { applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
	(window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
	applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

