import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './_root/pages/home'
import DataDisplay from './_root/pages/DataDisplay'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/display' element={<DataDisplay />} />
      </Routes>
    </>
  )
}

export default App
