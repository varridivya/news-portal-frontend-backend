import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cache from "./cache.js";

dotenv.config();
const router = express.Router();
const baseURL = process.env.GNEWS_API_URL;
const apiKey = process.env.GNEWS_API_KEY;

const fetchFromCacheOrAPI = async (key, url) => {
    const cached = cache.get(key);
    if (cached) return cached;
    const res = await axios.get(url);
    cache.set(key, res.data);
    return res.data;
};

router.get("/latest", async (req, res) => {
    const limit = req.query.limit || "10";
    try {
        const url = `${baseURL}/top-headlines?token=${apiKey}&max=${limit}`;
        const data = await fetchFromCacheOrAPI(`latest_${limit}`, url);
        res.json(data);
    } catch (err) { console.error(err); res.status(500).json({ error: "Failed to fetch latest news" }); }
});

router.get("/search", async (req, res) => {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: "Missing search query 'q'" });
    try {
        const url = `${baseURL}/search?q=${encodeURIComponent(q)}&token=${apiKey}`;
        const data = await fetchFromCacheOrAPI(`search_${q}`, url);
        res.json(data);
    } catch (err) { console.error(err); res.status(500).json({ error: "Failed to search news" }); }
});

export default router;
