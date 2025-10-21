import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLatestNews, searchNews } from "../api";

export const fetchLatestNews = createAsyncThunk("news/fetchLatest", async (limit = 10)=>{
  const res = await getLatestNews(limit); return res.data.articles || [];
});
export const fetchSearchResults = createAsyncThunk("news/fetchSearch", async (query:string)=>{
  const res = await searchNews(query); return res.data.articles || [];
});

interface NewsState { articles:any[]; loading:boolean; error:string|null; }
const initialState:NewsState = {articles:[], loading:false, error:null};

const newsSlice = createSlice({
  name:"news", initialState, reducers:{}, extraReducers:(builder)=>{
    builder
      .addCase(fetchLatestNews.pending,(s)=>{s.loading=true;s.error=null;})
      .addCase(fetchLatestNews.fulfilled,(s,a)=>{s.loading=false;s.articles=a.payload;})
      .addCase(fetchLatestNews.rejected,(s,a)=>{s.loading=false;s.error=a.error.message||'Error';})
      .addCase(fetchSearchResults.pending,(s)=>{s.loading=true;s.error=null;})
      .addCase(fetchSearchResults.fulfilled,(s,a)=>{s.loading=false;s.articles=a.payload;})
      .addCase(fetchSearchResults.rejected,(s,a)=>{s.loading=false;s.error=a.error.message||'Error';});
  }
});
export default newsSlice.reducer;
