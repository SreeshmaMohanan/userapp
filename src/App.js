import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import './bootstrap.min.css';
import Landingpage from './components/Landingpage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{height:'100vh'}} >
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Read />} />

      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
