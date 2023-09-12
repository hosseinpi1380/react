import { useEffect, useState } from 'react'
const useFetch = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:4001/data')
                .then(res => res.json())
                .then(data => setData(data));
        }, 3000);
    }, [])
    return [data]
}

export default useFetch