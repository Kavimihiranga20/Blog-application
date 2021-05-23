
import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Single from "./pages/home/single/Single"
import Settings from "./pages/settings/Settings"
import Write from "./pages/write/Write"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost"


function App() {

  const user = true;



  return (
  
    <Router>
     <TopBar/>

     <Switch>

     <Route  exact  path="/home">
            <Home />
          </Route>
       
          <Route path="/register"> <Register/>  </Route>
          <Route path="/login">  <Login/>  </Route>
          <Route path="/write"> <Write/>  </Route>
           <Route path="/settings"> <Settings/>  </Route>
           <Route path="/singlePost"> <SinglePost/>  </Route>

          <Route path="/post/:postId">
            <Single />
          </Route>

         



       </Switch> 

    
    
    
    </Router>

    
    
  );
}

export default App;
