import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults, fetchLatestNews } from "../features/newsSlice";
const SearchBar:React.FC = ()=>{
  const [query,setQuery]=useState("");
  const dispatch = useDispatch();
  const onSubmit=(e:React.FormEvent)=>{ e.preventDefault(); if(query.trim()) dispatch(fetchSearchResults(query)); else dispatch(fetchLatestNews()); };
  return (<form onSubmit={onSubmit} style={{display:'flex',gap:8,marginBottom:16}}>
    <input style={{flex:1,padding:8,border:'1px solid #ccc',borderRadius:4}} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by keyword, title, or author..." />
    <button style={{padding:'8px 12px',borderRadius:4}}>Search</button>
  </form>);
};
export default SearchBar;
