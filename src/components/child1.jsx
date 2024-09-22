import { useFetch } from "../useFetch"


function Child1() {

    console.log("Child1 renders")
    const {loading, result, error, refech} = useFetch("https://fakestoreapi.com/products")
    

    return <div>
        <h1>Child1</h1>
        {loading && <p>Loading...</p>}
        {result && <p>Products: {result.length}</p>}
        {error && <p>Error loading data</p>}
        <button onClick={refech}>Refetch</button>
    </div>
}
export default Child1