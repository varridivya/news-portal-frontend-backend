import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const NewsList:React.FC = ()=>{
  const {articles,loading,error} = useSelector((state:RootState)=>state.news);
  if(loading) return <p>Loading...</p>;
  if(error) return <p style={{color:'red'}}>Error: {error}</p>;
  if(!articles || !articles.length) return <p>No articles found.</p>;
  return (<div style={{display:'grid',gap:12}}>{articles.map(a=>(
    <div key={a.url} style={{border:'1px solid #e2e2e2',padding:12,borderRadius:6}}>
      <h3 style={{margin:0}}>{a.title}</h3>
      <p style={{margin:'8px 0'}}>{a.description}</p>
      <a href={a.url} target="_blank" rel="noreferrer">Read more →</a>
      <div style={{marginTop:8,fontSize:12,color:'#555'}}>Source: {a.source?.name||'unknown'} • {a.author||'—'}</div>
    </div>))}</div>);
};
export default NewsList;
