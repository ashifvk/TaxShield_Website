import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import BrandFooter from './Components/BrandFooter/BrandFooter';
import Computer from './Components/Computer/Computer';
import Experts from './Components/Experts/Experts';
import Card from './Components/Card/Card';
import Welcome from './Components/Welcome/Welcome';
import Refferal from './Components/Refferal/Refferal';
import Advance from './Components/Advance/Advance';
import Call from './Components/Call/Call';
import Premium from './Components/Premium/Premium';
import Text from './Components/Text/Text';
import Credit from './Components/Credit/Credit';
import Table from './Components/Table/Table';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='nav' element={<Nav/>}/>
      <Route path='welcome' element={<Welcome/>}/>
      <Route path='brand' element={<BrandFooter/>}/>
      <Route path='computer' element={<Computer/>}/>
      <Route path='advance' element={<Advance/>}/>
      <Route path='call' element={<Call/>}/>
      <Route path='refer' element={<Refferal/>}/>
      <Route path='text' element={<Text/>}/>
      <Route path='credit' element={<Credit/>}/>
      <Route path='card' element={<Card/>}/>
      <Route path='table' element={<Table/>}/>
      <Route path='experts' element={<Experts/>}/>
      <Route path='premium' element={<Premium/>}/>
      <Route path='footer' element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
