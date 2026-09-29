import { useEffect, useState } from 'react';
import './Admin.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const emptyHome = () => ({ portId: '', portName: '', portAddress: '', portImage: '', portImage2: '', portImage3: '', content: { en: { description: '' }, fr: { description: '' }, es: { description: '' } } });
const emptyBlog = () => ({ blogId: '', image: '', datePosted: new Date().toISOString().slice(0,10), content: { en: { caption: '', fullPost: '' }, fr: { caption: '', fullPost: '' }, es: { caption: '', fullPost: '' } } });

async function request(path, options = {}) {
  const token = localStorage.getItem('admin_token');
  const res = await fetch(`${API}${path}`, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(options.headers || {}) } });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'Request failed');
  return res.status === 204 ? null : res.json();
}

function Login({ onLogin }) {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [error, setError] = useState('');
  const submit = async e => { e.preventDefault(); try { const data = await request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }); localStorage.setItem('admin_token', data.token); onLogin(); } catch (err) { setError(err.message); } };
  return <div className="admin-login"><form onSubmit={submit} className="admin-card"><h1>Admin</h1><input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} /><button>Login</button>{error && <p className="admin-error">{error}</p>}</form></div>;
}

function HomeForm({ value, onSave, onCancel }) {
  const [item, setItem] = useState(value);
  const set = (key, v) => setItem(x => ({ ...x, [key]: v }));
  const setDesc = (lang, v) => setItem(x => ({ ...x, content: { ...x.content, [lang]: { ...x.content?.[lang], description: v } } }));
  return <form className="admin-form" onSubmit={e=>{e.preventDefault();onSave(item)}}><h2>{item.id ? 'Edit Home' : 'Add Home'}</h2><input placeholder="Home name" value={item.portName} onChange={e=>set('portName',e.target.value)} required/><input placeholder="Address" value={item.portAddress} onChange={e=>set('portAddress',e.target.value)} required/><input placeholder="Main image URL" value={item.portImage} onChange={e=>set('portImage',e.target.value)} required/><input placeholder="Image 2 URL" value={item.portImage2} onChange={e=>set('portImage2',e.target.value)}/><input placeholder="Image 3 URL" value={item.portImage3} onChange={e=>set('portImage3',e.target.value)}/>{['en','fr','es'].map(lang=><textarea key={lang} placeholder={`${lang.toUpperCase()} description`} value={item.content?.[lang]?.description || ''} onChange={e=>setDesc(lang,e.target.value)} />)}<div className="admin-actions"><button type="submit">Save</button><button type="button" className="secondary" onClick={onCancel}>Cancel</button></div></form>;
}

function BlogForm({ value, onSave, onCancel }) {
  const [item, setItem] = useState(value);
  const set = (key, v) => setItem(x => ({ ...x, [key]: v }));
  const setLang = (lang, key, v) => setItem(x => ({ ...x, content: { ...x.content, [lang]: { ...x.content?.[lang], [key]: v } } }));
  return <form className="admin-form" onSubmit={e=>{e.preventDefault();onSave(item)}}><h2>{item.id ? 'Edit Post' : 'New Post'}</h2><input type="date" value={item.datePosted || ''} onChange={e=>set('datePosted',e.target.value)} /><input placeholder="Featured image URL" value={item.image} onChange={e=>set('image',e.target.value)}/>{['en','fr','es'].map(lang=><div className="lang-box" key={lang}><h3>{lang.toUpperCase()}</h3><input placeholder="Title" value={item.content?.[lang]?.caption || ''} onChange={e=>setLang(lang,'caption',e.target.value)} required/><textarea className="post-body" placeholder="Post" value={item.content?.[lang]?.fullPost || ''} onChange={e=>setLang(lang,'fullPost',e.target.value)} required/></div>)}<div className="admin-actions"><button>Save</button><button type="button" className="secondary" onClick={onCancel}>Cancel</button></div></form>;
}

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('admin_token'));
  const [tab, setTab] = useState('homes'); const [homes, setHomes] = useState([]); const [blogs, setBlogs] = useState([]); const [editing, setEditing] = useState(null); const [loading, setLoading] = useState(true);
  const load = async () => { setLoading(true); try { const [h,b] = await Promise.all([request('/api/admin/homes'), request('/api/admin/blog')]); setHomes(h); setBlogs(b); } catch { localStorage.removeItem('admin_token'); setLoggedIn(false); } finally { setLoading(false); } };
  useEffect(() => { if (loggedIn) load(); }, [loggedIn]);
  if (!loggedIn) return <Login onLogin={()=>setLoggedIn(true)} />;
  const saveHome = async data => { if (data.id) await request(`/api/admin/homes/${data.id}`, { method:'PUT', body:JSON.stringify({data}) }); else await request('/api/admin/homes', { method:'POST', body:JSON.stringify({data:{...data,portId:String(Date.now())}}) }); setEditing(null); load(); };
  const saveBlog = async data => { if (data.id) await request(`/api/admin/blog/${data.id}`, { method:'PUT', body:JSON.stringify({data}) }); else await request('/api/admin/blog', { method:'POST', body:JSON.stringify({data:{...data,blogId:String(Date.now())}}) }); setEditing(null); load(); };
  const del = async (type,id) => { if (!window.confirm('Delete this item?')) return; await request(`/api/admin/${type}/${id}`, {method:'DELETE'}); load(); };
  return <div className="admin-shell"><header><div><div className="admin-brand">DSCR & Beyond</div><span>Admin</span></div><button className="logout" onClick={()=>{localStorage.removeItem('admin_token');setLoggedIn(false)}}>Logout</button></header><main><nav><button className={tab==='homes'?'active':''} onClick={()=>{setTab('homes');setEditing(null)}}>Homes</button><button className={tab==='blog'?'active':''} onClick={()=>{setTab('blog');setEditing(null)}}>Blog</button></nav>{editing ? (tab==='homes' ? <HomeForm value={editing} onSave={saveHome} onCancel={()=>setEditing(null)}/> : <BlogForm value={editing} onSave={saveBlog} onCancel={()=>setEditing(null)}/>) : <section className="admin-list"><div className="list-head"><h1>{tab==='homes'?'Homes':'Blog Posts'}</h1><button onClick={()=>setEditing(tab==='homes'?emptyHome():emptyBlog())}>{tab==='homes'?'+ Add Home':'+ New Post'}</button></div>{loading?<p>Loading...</p>:(tab==='homes'?homes:blogs).map(row=><article className="admin-row" key={row.id}><div>{(tab==='homes'?row.data.portName:row.data.content?.en?.caption)||'Untitled'}<small>{tab==='homes'?row.data.portAddress:row.data.datePosted}</small></div><div><button className="secondary" onClick={()=>setEditing({...row.data,id:row.id})}>Edit</button><button className="danger" onClick={()=>del(tab==='homes'?'homes':'blog',row.id)}>Delete</button></div></article>)}</section>}</main></div>;
}
