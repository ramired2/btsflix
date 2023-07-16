import './style/App.css';

import Homepage from './pages/Homepage.js';
import MainVid from './pages/MainVid.js';
import CategoriesVid from './components/CategoriesVid.js'

/* special library and its components to perform redirection easily */
import {
  BrowserRouter as Router, // store the components and its routes as an object
  Route, // a statement that holds the specific path of the app and the component's name, renders it once it matches the URL
  Routes
} from "react-router-dom"; // more about that here: https://www.pluralsight.com/guides/how-to-set-react-router-default-route-redirect-to-home

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/shows" element={<MainVid/>} />
          {/* <Route exact path="/categories" element={<CategoriesVid/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
