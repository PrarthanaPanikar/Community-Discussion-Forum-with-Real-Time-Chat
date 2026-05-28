import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { setToken } from '../services/auth';

export default function Register(){
  const navigate = useNavigate();
  const [form, setForm] = useState({ email:'', password:'', name:'' });
  const [error, setError] = useState('');

  async function submit(e){
    e.preventDefault();
    setError('');
    try {
      const res = await API.post('/auth/register', form);
      setToken(res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  }

  return (
    <div className="card">
      <div className="card-header"><h2>Create Account</h2></div>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Name</label>
          <input placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input placeholder="Email address" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        </div>
        <button className="primary" type="submit">Register</button>
      </form>
    </div>
  );
}
