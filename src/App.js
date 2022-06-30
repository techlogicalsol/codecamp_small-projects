import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import StudentDatabase from './Components/StudentDatabase';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Color from './Components/Color';
import StockDatabase from './Components/StockDatabase';
import MySearch from './Components/MySearch';
import Time from './Components/Time';
import Welcome from './Components/Welcome';
import ColorApp from './Components/ColorApp';
import Contact from './Components/Contact';
import ContactBook from './Components/ContactBook';
import ContactDetails from './Components/ContactDetails';
import CountryApp from './Components/CountryApp';
import WeatherApp from './Components/WeatherApp';
import NewWeather from './Components/NewWeather';


function App(){
    return(
      <>
        <NavBar />

        <Switch>
      
        <Route exact path='/' component={Home} />
        <Route exact path='/color' component={Color} />
        <Route exact path='/database' component={StudentDatabase} />
        <Route exact path='/stockDatabase' component={StockDatabase} />
        <Route exact path='/mysearch' component={MySearch} />
        <Route exact path='/time' component={Time} />
        <Route exact path='/welcome' component={Welcome} />
        <Route exact path='/colorapp' component={ColorApp} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/contactapp' component={ContactBook} />
        <Route exact path='/countryapp' component={CountryApp}/>
        <Route exact path='/weatherapp' component={WeatherApp} />
        <Route exact path='/newweather' component={NewWeather} />
        
        


        <Redirect to='/' />
        </Switch>

      </>
    )
  }

export default App;
