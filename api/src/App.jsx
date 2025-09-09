import './App.css'
import axios from 'axios'
import { useState } from 'react'
function App() {
  const [data, setData] = useState([])
  async function getData(e){
    e.preventDefault()
    const response = await fetch('https://picsum.photos/v2/list')
    const result = await response.json()
    setData(result)
  }
  return (
    <>
      <button onClick={getData} className=" rounded-xl m-15 h-25 w-50 bg-teal-500 text-white active:scale-90">API Calling</button>
      <div className='ml-15 p-5 mt-5 bg-gray-900'>
        {data.map((d) => (
        <div key={d.id} className="text-white"><img className="h-40" src={d.download_url}/>{d.author}</div>
))}
      </div>
    </>
  )
}
export default App