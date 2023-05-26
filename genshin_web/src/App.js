import './App.css';
import NavigateBar from './components/NavigateBar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import TierTable from './components/TierTable'; 
import FootFunc from './components/Footer';
import background from "./components/background5.jpg";
import Login from './components/Login'; 
import Register from './components/Register';
import Home from './components/Home';
import CreateForm from './components/CreateForm';
import Alert from './components/Alert';
import Map from './components/Map';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Whoarewe from './pages/Whoarewe';
import ProjectSummary from './pages/ProjectSummary';
import Methods from './pages/Methods';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ 
        backgroundImage: `url(${background})`
      }}>
        <NavigateBar />
        <br />
        <br />
        <br />

        {/* <TierTable /> */}
        

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/createform" element={<CreateForm />} />
          <Route exact path="/alert" element={<Alert />} />
          <Route exact path="/map" element={<Map />} />
          <Route exact path="/contactUs" element={<Contact />} />
          <Route exact path="/Whoarewe" element={<Whoarewe />} />
          <Route exact path="/ProjectSummary" element={<ProjectSummary />} />
          <Route exact path="/Methods" element={<Methods />} />


          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>

        <FootFunc />
      </div>
    </BrowserRouter>
  );
}

export default App;
