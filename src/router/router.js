import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route,Link ,BrowserRouter} from 'react-router-dom';
//import Counter from '../pages/Counter/Counter';
//import Home from '../pages/Home/Home';
//import Roster from '../pages/Roster/Roster';
//import Schedule from '../pages/Schedule/Schedule';
//import UserInfo from '../pages/UserInfo/UserInfo';
import Bundle from './Bundle';


const Loading = function () {
  return <div>Loading...</div>
};

/*const Component = (props) => (
  <Bundle load={() => import('../pages/Counter/Counter')}>
      {(Counter) => Counter ? <Counter {...props} /> : <Loading/>}
  </Bundle>
);*/

const Counter = (props) => (
  <Bundle load={() => import('../pages/Counter/Counter')}>
      {(Counter) => Counter ? <Counter {...props} /> : <Loading/>}
  </Bundle>
);
const Home = (props) => (
  <Bundle load={() => import('../pages/Home/Home')}>
      {(Home) => Home ? <Home {...props} /> : <Loading/>}
  </Bundle>
);
const Roster = (props) => (
  <Bundle load={() => import('../pages/Roster/Roster')}>
      {(Roster) => Roster ? <Roster {...props} /> : <Loading/>}
  </Bundle>
);
const Schedule = (props) => (
  <Bundle load={() => import('../pages/Schedule/Schedule')}>
      {(Schedule) => Schedule ? <Schedule {...props} /> : <Loading/>}
  </Bundle>
);
const UserInfo = (props) => (
  <Bundle load={() => import('../pages/UserInfo/UserInfo')}>
      {(UserInfo) => UserInfo ? <UserInfo {...props} /> : <Loading/>}
  </Bundle>
);

//const Counter = Component('../pages/Counter/Counter');
/*const Home = Component('../pages/Home/Home');
const Roster = Component('../pages/Roster/Roster');
const Schedule = Component('../pages/Schedule/Schedule');
const UserInfo = Component('../pages/UserInfo/UserInfo');*/

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path="/counter" component={Counter}/>
      <Route path="/userinfo" component={UserInfo}/>
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/userinfo">UserInfo</Link></li>
      </ul>
    </nav>
  </header>
)

const Bottom = ()=>(
  <h1>
    React全家桶
  </h1>
)

export default () => (
  <BrowserRouter>
    <Header />
    <Main />
    <Bottom />
  </BrowserRouter>
);