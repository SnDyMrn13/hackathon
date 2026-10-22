
import useFetchData from './useFetchData.js'



function App(){
  const { records, loading, error } = useFetchData("https://student-data-api.cindino45.workers.dev/api/v1/datasets/birds-of-the-world/records?limit=10")
  console.log(records)

  return (
    <div className="container">

      <h1>What to feed a hungry bird</h1>
      <p>To help nature lovers find a bird's diet.</p>
    </div>
    
  )

}
export default App
