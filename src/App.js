import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  useEffect(() =>{
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    const authToken = urlParam.get('token');
    if(authToken){
      localStorage.setItem('token', authToken);
      setToken(authToken);
    }
  },[])

  const config = {
    signInRedirectURL: "http://localhost:3000", //callback_url of the application
    clientID: "1z8QqoA68H35d5BPpNBudoEeaska", //client_id of the application
    domain: 'finvdom', //domain name
    baseUrl: "https://demo-product.3insys.com:8202",
    scope: [ "openid","profile" ]
  }

  const handleLogin = () => {
    const newTabUrl = `${config.baseUrl}/login?domain=${config.domain}&client_id=${config.clientID}&red_url=${config.signInRedirectURL}`;
    window.location.href = newTabUrl;
  }

  useEffect(() => {
    const tokenn = localStorage.getItem('token');
    if(tokenn){
      setToken(tokenn)
    }
  },[token])

  const handleLogout = () => {
    localStorage.clear();
    setToken('');
    navigate('/')
  }

  return (
    <div className="App">
      <h1>XSM Sample React App</h1>
      {
        token
          ? (
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )
          : <button onClick={handleLogin}>Login</button>
      }
    </div>
  );
}

export default App;
