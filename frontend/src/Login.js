import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage(`Login successful! Welcome, ${data.name}`);
        console.log('Login success:', data);
      } else {
        setMessage(data.error || 'Login failed.');
      }
    } catch (error) {
      setLoading(false);
      setMessage('Unable to connect to server.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: 5 }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            placeholder="Enter username"
          />
        </div>

        <div style={{ marginBottom: 15 }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: 5 }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {message && (
        <div style={{ marginTop: 20, color: message.startsWith('Login successful') ? 'green' : 'red' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;