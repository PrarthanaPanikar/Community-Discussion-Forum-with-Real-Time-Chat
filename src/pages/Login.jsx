import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { setToken } from '../services/auth';

export default function Login(){
  const navigate = useNavigate();
  const [form, setForm] = useState({ email:'', password:'' });
  const [error, setError] = useState('');

  async function submit(e){
    e.preventDefault();
    setError('');
    try {
      const res = await API.post('/auth/login', form);
      setToken(res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  }

  return (
    <div className="card">
      <div className="card-header"><h2>Welcome Back</h2></div>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email</label>
          <input placeholder="Email address" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        </div>
        <button className="primary" type="submit">Login</button>
      </form>
    </div>
  );
}
