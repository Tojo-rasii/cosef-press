import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '../src/Styles/Responsive.css';
import Home from './Components/Home';
import ALaUne from './Components/ALaUne';
import Politique from './Components/Politique';
import Actualite from './Components/Actualite';
import Sport from './Components/Sport';
import Social from './Components/Social';
import Culturel from './Components/Culturel';
import Search from './Components/Search';
import Body_About from './Pages/Body_About';
import MotDuQuesteur from './Components/MotDuQuesteur';
import MiniBiographie from './Components/MiniBiographie';

function App() {
  return (
    <div>
      <HashRouter>
          <Routes>
            <Route />
            <Route path="/" element={<Home />} />
            <Route path="/actu" element={<Actualite />} />
            <Route path="/aLaUne" element={<ALaUne />} />
            <Route path="/politique" element={<Politique />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/social" element={<Social />} />
            <Route path="/culturel" element={<Culturel />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<Body_About />} />
            <Route path="/motDuQuesteur" element={<MotDuQuesteur />} />
            <Route path="/miniBiographie" element={<MiniBiographie />} />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
