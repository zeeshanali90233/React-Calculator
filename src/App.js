import './App.css';
import { Calculator } from './components/Calculator';
import Header from './components/Header';
import {About} from './components/about';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header heading="Calculator" searchBar={true}/>
      <Routes>
          <Route path="about" element={<About/>} />
        <Route path="/" element={<Calculator/>}>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
