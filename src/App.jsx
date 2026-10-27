import {useState} from 'react'
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'
import Hero from './Hero.jsx'
import Header from './Header.jsx'

import Footer from './Footer.jsx'
import './index.css'


function App(){
  const { records, loading, error } = useFetchData("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?limit=10")

  const [query, setQuery] = useState("")

  const search = () => {
  setQuery(document.querySelector("#query").value)
  } 

  if (loading){
    return <p>loading...</p>
  }
  
  const shown = records.filter((record) => record.Name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="container">
       <input type="text" id="query" placeholder="Search Name" />
      <button onClick={search}>Search</button>
      {shown.map((record) => <RecordCard key={record.id} record={record} />)}
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
