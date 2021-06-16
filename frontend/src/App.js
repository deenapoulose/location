
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import HomeScreen from './screens/HomeScreen'
import placescreen from './screens/placescreen';
import SigninScreen from './screens/SigninScreen';
import EditScreen from './screens/EditScreen';
import AddScreen from './screens//AddScreen';
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
            Location Locator
            </Link>
          </div>
          <div>
            
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  
                  <li>
                    <Link to="/placehistory">View places</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
         
        </header>
        <main>
  
 
     
     
  
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/placehistory" component={ placescreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
         
          <Route
            path="/product/:id/edit"
            component={EditScreen}
            exact></Route>
            <Route
            path="/add"
            component={AddScreen}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
