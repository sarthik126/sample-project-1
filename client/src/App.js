import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AddDetails from './components/AddDetails';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const [auth,setAuth] = useState(false)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login setAuth={setAuth} email={email} pass={pass} setEmail={setEmail} setPass={setPass} />} />
          <Route path='/details' element={<AddDetails auth={auth} />} />
          <Route path='/dashboard' element={<Dashboard auth={auth} /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
