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
import MotDuQuesteur from './Components/MotDuQuesteur';
import MiniBiographie from './Components/MiniBiographie';
import ClickArticle from './Components/ClickArticle';
import Apropos from './Components/Apropos';
import ClickVideo from './Components/ClickVideo';
import LogsActualite from './Logs/LogsActualite';
import LogsProfile from './Logs/LogsProfile';
import LogsHome from './Logs/LogsHome';
import LogsClickArticle from './Logs/LogsClickArticle';
import LogsClickVideo from './Logs/LogsClickVideo';
import LogsALaUne from './Logs/LogsALaUne';
import LogsPolitique from './Logs/LogsPolitique';
import LogsSport from './Logs/LogsSport';
import LogsSocial from './Logs/LogsSocial';
import LogsCulturel from './Logs/LogsCulturel';
import LogsSearch from './Logs/LogsSearch';
import LogsApropos from './Logs/LogsApropos';
import LogsMotQuesteur from './Logs/LogsMotQuesteur';
import LogsMiniBiographie from './Logs/LogsMiniBiographie';
import AdminHome from './Admin/AdminHome';
import ForgotPassword from './Pages/ForgotPassword';
import Body_Actualite from './Pages/Body_Actualite';

function App() {
  const body = document.querySelector('body');
  body.classList.add('bodyFont');
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
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/motDuQuesteur" element={<MotDuQuesteur />} />
            <Route path="/miniBiographie" element={<MiniBiographie />} />
            <Route path="/forgot" element={<ForgotPassword />} />

            {/* CLICK ARCTICLE & VIDEO */}
            <Route path="/article" element={<ClickArticle />} />
            <Route path="/video" element={<ClickVideo />} />
            <Route path="/actu/:id" component={<Body_Actualite />} />


            {/* CONNECTER */}
            <Route path="/logsActu" element={<LogsActualite />}/>
            <Route path="/logsProfile" element={<LogsProfile />}/>
            <Route path="/logsHome" element={<LogsHome />}/>
            <Route path="/logsAlaune" element={<LogsALaUne />}/>
            <Route path="/logsPolitique" element={<LogsPolitique />}/>
            <Route path="/logsSport" element={<LogsSport />}/>
            <Route path="/logsSocial" element={<LogsSocial />}/>
            <Route path="/logsCulturel" element={<LogsCulturel />}/>
            <Route path="/logsSearch" element={<LogsSearch />}/>
            <Route path="/logsApropos" element={<LogsApropos />}/>
            <Route path="/logsMotDuQuesteur" element={<LogsMotQuesteur />}/>
            <Route path="/logsMiniBiographie" element={<LogsMiniBiographie />}/>

            {/* CLICK ARTICLE & VIDEO CONNECTER*/}
            <Route path="/logsArticle" element={<LogsClickArticle />}/>
            <Route path="/logsVideo" element={<LogsClickVideo />}/>

            {/* ADMIN DASHBOARD */}
            <Route path='/adminHome' element={<AdminHome />}/>
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
