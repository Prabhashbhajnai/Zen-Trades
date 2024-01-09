import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './_root/pages/home'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
