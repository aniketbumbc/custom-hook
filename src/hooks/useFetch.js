import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      try {
        axios.get(url).then((data) => {
          setData(data.data);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    }, 10000);
  }, [url]);
  return { data, loading };
};

export default useFetch;
