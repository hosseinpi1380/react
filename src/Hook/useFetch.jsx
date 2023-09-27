const useFetch=()=>{
    fetch('http://localhost:3000/api/products')
    .then(res=>res.json())
    .then(data=> data)
}
export default useFetch;