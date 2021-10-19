
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About/About';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound/NotFound';
import OnlineService from './components/OnlineService/OnlineService/OnlineService';
import ServiceDetail from './components/Services/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/service/:detail">
            <ServiceDetail/>
          </Route>
          <Route exact path="/e-doctor">
            <OnlineService/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
