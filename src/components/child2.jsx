import { useFetch } from "../useFetch"


function Child2() {

    console.log("Child2 renders")
    const {loading, result, error, refech} = useFetch("https://fakestoreapi.com/products")
    

    return <div>
        <h1>Child2</h1>
        {loading && <p>Loading...</p>}
        {result && <p>Products: {result.length}</p>}
        {error && <p>Error loading data</p>}
        <button onClick={refech}>Refetch</button>
    </div>
}
export default Child2