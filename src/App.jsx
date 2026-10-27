
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'
import Hero from './Hero.jsx'
import Header from './Header.jsx'

import Footer from './Footer.jsx'
import './index.css'


function App(){
  const { records, loading, error } = useFetchData("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?limit=10")

  if (loading){
    return <p>loading...</p>
  }
  

  return (
    <div className="container">
      <Hero/>
      <Header/>
      <h1 className = "h1">What to feed a hungry bird</h1>
      <p><strong>To help nature lovers find a bird's diet.</strong></p>
      <p>{error}</p>
     <RecordCard record={records[0]} />
     <RecordCard record={records[1]} />
    
      <Footer/>
    </div>
    
  )

}
export default App
