import React, { useEffect, useState, useRef } from 'react';
import API from '../services/api';
import { useParams } from 'react-router-dom';
import { createSocket } from '../sockets/socket';

export default function DiscussionDetail(){
  const { id } = useParams();
  const [discussion, setDiscussion] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [chatText, setChatText] = useState('');
  const [chatMsgs, setChatMsgs] = useState([]);
  const [error, setError] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    API.get(`/discussions/${id}`).then(r => setDiscussion(r.data));
    API.get(`/comments/${id}`).then(r => setComments(r.data));
    const token = localStorage.getItem('community_forum_token');
    const s = createSocket(token);
    socketRef.current = s;
    s.emit('room:join', `discussion:${id}`);
    s.on('message:new', m => setChatMsgs(prev => [...prev, m]));
    return () => {
      s.emit('room:leave', `discussion:${id}`);
      s.close();
    };
  }, [id]);

  async function addComment(e){
    e.preventDefault();
    setError('');
    try {
      await API.post('/comments', { discussionId: id, content: commentText });
      setCommentText('');
      const res = await API.get(`/comments/${id}`);
      setComments(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to post comment');
    }
  }

  function sendChat(){
    if(!chatText.trim()) return;
    const s = socketRef.current;
    if(!s) return;
    s.emit('message:send', { room:`discussion:${id}`, text: chatText });
    setChatMsgs(prev => [...prev, { text: chatText, author: { name:'You' } }]);
    setChatText('');
  }

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h2>{discussion?.title || 'Loading discussion...'}</h2>
          <p className="help-text">{discussion?.content}</p>
        </div>
        <span className="badge">Live room</span>
      </div>

      {error && <div className="alert">{error}</div>}

      <section className="section">
        <h3>Comments</h3>
        <ul className="comment-list">
          {comments.map(c => (
            <li key={c._id} className="comment-item">
              <strong>{c.author?.name || 'Unknown'}</strong>
              <p>{c.content}</p>
              <span className="help-text">{new Date(c.createdAt).toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <form onSubmit={addComment} className="section">
          <div className="form-group">
            <label>Reply to this discussion</label>
            <textarea value={commentText} onChange={e=>setCommentText(e.target.value)} placeholder="Write your comment..." />
          </div>
          <button className="primary" type="submit">Post comment</button>
        </form>
      </section>

      <section className="section">
        <h3>Live Chat</h3>
        <div className="chat-window">
          {chatMsgs.length === 0 && <p className="help-text">Join the room and start chatting.</p>}
          {chatMsgs.map((m, i) => (
            <div key={i} className="chat-item">
              <strong>{m.author?.name || 'Anonymous'}</strong>: {m.text}
            </div>
          ))}
        </div>
        <div className="chat-input-row">
          <input
            value={chatText}
            onChange={e=>setChatText(e.target.value)}
            placeholder="Type chat message..."
            onKeyDown={e => { if(e.key==='Enter'){ e.preventDefault(); sendChat(); } }}
          />
          <button className="primary" type="button" onClick={sendChat}>Send</button>
        </div>
      </section>
    </div>
  );
}
