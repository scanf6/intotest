import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddlewares(rootReducer);

export default store;