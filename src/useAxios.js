import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios() {

    const [data, setData] = useState(null);
    const [url, setUrl] = useState('');
    const [error, setError] =  useState(null);
    const [loading, setLoading] = useState(false);

    async function customFetch() {
        
        try{
            let payload = await axios.get(url);

            setData(payload.data);
            setLoading(false);
            setError(null);

        } catch (e) {

            if (e.response.status === 404) {
                
                setError('data not found');
                setData(null);
                setLoading(false);
        
            } else {

                setError(e.message);
                setData(null);
                setLoading(false);

            }
        }
    }

    useEffect(() => {

        if (loading) {
            customFetch(url);
        }
    }, [loading]);

    return [setUrl, data, loading, setLoading, error];

}

export default useAxios;
