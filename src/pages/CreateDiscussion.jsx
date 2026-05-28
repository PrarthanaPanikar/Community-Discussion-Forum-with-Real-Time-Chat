import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function CreateDiscussion(){
  const navigate = useNavigate();
  const [form, setForm] = useState({ title:'', content:'', tags:'' });
  const [error, setError] = useState('');

  async function submit(e){
    e.preventDefault();
    setError('');
    try {
      await API.post('/discussions', {
        title: form.title,
        content: form.content,
        tags: form.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Unable to create discussion');
    }
  }

  return (
    <div className="card">
      <div className="card-header"><h2>Start a new discussion</h2></div>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Title</label>
          <input placeholder="Discussion title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea placeholder="Write the description or question" value={form.content} onChange={e=>setForm({...form,content:e.target.value})} />
        </div>
        <div className="form-group">
          <label>Tags</label>
          <input placeholder="Separate with commas" value={form.tags} onChange={e=>setForm({...form,tags:e.target.value})} />
        </div>
        <button className="primary" type="submit">Publish discussion</button>
      </form>
    </div>
  );
}
