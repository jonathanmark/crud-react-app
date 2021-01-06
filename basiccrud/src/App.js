// import react from 'react';
import {Main} from './container/Main';
// import AddUser from './components/AddUser';
import {UpdateUser} from './components/UpdateUser';
import ErrorPage from './container/ErrorPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ViewUser from './container/ViewUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from './context/GlobalContext';


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component ={Main}/>
          {/* <Route path = "/add" component ={AddUser}/> */}
          <Route path = "/view/:id" component ={ViewUser}/>
          <Route path = "/update/:id" component ={UpdateUser}/>
          <Route component ={ErrorPage}/>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
