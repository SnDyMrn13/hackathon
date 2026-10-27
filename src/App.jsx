import {useState} from 'react'
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'
import Hero from './Hero.jsx'
import Header from './Header.jsx'

import Footer from './Footer.jsx'
import './index.css'


function App(){
  const { records, loading, error } = useFetchData("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?limit=20")

  const [query, setQuery] = useState("")

  const search = () => {
  setQuery(document.querySelector("#query").value)
  } 

  const [Diet, setDiet] = useState("")
  const showseeds = () => {
  setDiet("seeds")
}
const showAll = () => {
  setDiet("")
}

  if (loading){
    return <p>loading...</p>
  }
  
  const shown = records.filter((record) => record.Name.toLowerCase().includes(query.toLowerCase()))
  const shown2 = records.filter((record) => record.Diet.includes(Diet))

  return (
    <div className="container">
       <input type="text" id="query" placeholder="Search Name" />
      <button onClick={search}>Search</button>
      {shown.map((record) => <RecordCard key={record.id} record={record} />)}

      <button onClick={showseeds}>seeds</button>
      <button onClick={showAll}>All</button>
      {shown2.map((record) => <RecordCard key={record.id} record={record} />)}

      <Hero/>
      <Header/>
      <h1 className = "h1">What to feed a hungry bird</h1>
      <p><strong>To help nature lovers find a bird's diet.</strong></p>
      <p>{error}</p>
     
    
    {records.map((record) => <RecordCard key={record.id} record={record} />)}
      <Footer/>
    </div>
    
  )

}
export default App
