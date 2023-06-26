import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../services/AuthContext';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try {
        debugger;
     await handleLogin(username, password);
    
      navigate('/');
    } catch (error) {
        if(error.response && error.response.status === 401){
            setError('Invalid username or password.');
        }else{
            setError(error.message);
        }
        console.error('Login error', error);

    }
  };

  useEffect(() => {
    setError('');
  }, []);

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
