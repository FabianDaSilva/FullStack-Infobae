import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL;
    const APP_ID = import.meta.env.VITE_APP_ID;

    useEffect(() => {
        axios
            .get(`${API_URL}${endpoint}`, {
                headers: {
                    'app-id': APP_ID,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { data, error, loading };
};
