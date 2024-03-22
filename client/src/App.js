import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Router>
     <Routes>
     <Route path="/"  element={<Homescreen/>} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
 
