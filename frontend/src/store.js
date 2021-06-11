// import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import { userSigninReducer,} from './reducers/userReducers';
// import {
//   productDetailsReducer,
//   productListReducer,
//   productDeleteReducer,
// } from './reducers/productReducers';
// const initialState = {
//   userSignin: {
//     userInfo: localStorage.getItem('userInfo')
//       ? JSON.parse(localStorage.getItem('userInfo'))
//       : null,
//   },
  
// };
// const reducer = combineReducers({
//   userSignin: userSigninReducer,
//   productList: productListReducer,
//   productDetails: productDetailsReducer,
//   productDelete: productDeleteReducer,
// });
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );

// export default store;
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
} from './reducers/productReducers';
import {
 
  userSigninReducer,
 
} from './reducers/userReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  }
 
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  
  userSignin: userSigninReducer,
  
 
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
