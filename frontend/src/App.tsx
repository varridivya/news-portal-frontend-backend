import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLatestNews } from "./features/newsSlice";
import SearchBar from "./components/SearchBar";
import NewsList from "./components/NewsList";
import { AppDispatch } from "./app/store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{ 
    dispatch(fetchLatestNews()); 
  }, [dispatch]);
  return (
  <div style={{maxWidth:900, margin:'24px auto', padding:20}}>
    <h1 style={{textAlign:'center'}}>📰 News Portal</h1><SearchBar /><NewsList />
  </div>
  );
};
export default App;
