import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

export default function Dashboard(){
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/discussions')
      .then(r => setList(r.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h2>Community board</h2>
          <p className="help-text">Browse active discussions or create a new topic.</p>
        </div>
        <Link className="primary" to="/discussions/new">Create discussion</Link>
      </div>

      {loading ? (
        <p>Loading discussions…</p>
      ) : (
        <div className="discussion-list">
          {list.length === 0 && <p>No discussions yet. Start the first one.</p>}
          {list.map(d => (
            <Link key={d._id} to={`/discussions/${d._id}`} className="discussion-card">
              <h3>{d.title}</h3>
              <p>{d.content?.slice(0, 120) || 'No description yet.'}</p>
              <div className="badge">{d.tags?.length ? d.tags.join(', ') : 'General'}</div>
              <p className="help-text">Posted by {d.author?.name || 'Unknown'} · {new Date(d.createdAt).toLocaleDateString()}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
