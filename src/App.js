import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
import Chefs from './Components/Chefs'
import Cards from './Components/Cards';
import Blog from './Components/Blog';
import AppFeature from './Components/AppFeature'
import Footer from './Components/Footer'
import Reviews from './Components/Reviews'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Menu/>
    <Chefs/>
    <Cards/>
    <Reviews/>
    <Blog/>
    <AppFeature/>
    <Footer/>
    </div>
  );
}

export default App;
