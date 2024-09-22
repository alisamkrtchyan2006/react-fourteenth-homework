import './App.css'
import Child1 from './components/child1'
import Child2 from './components/child2'
import Child3 from './components/child3'
import Child4 from './components/child4'


let list = new Set()

function App() {
  return (
    <>
      <Child1/>
      <Child2/>
      <Child3/>
      <Child4/>
    </>
  )
}

export default App
