import { Routes, Route } from 'react-router-dom'

// Pages
import LoginPage from "./_auth/LoginPage";

function App() {
  return (
    <>
      <Routes>
        {/* public routes visible for everyone */}
          <Route path='/' element={<LoginPage />} />

        {/* private routes visible on after signing in*/}
        {/* <Route path='/dashboard' element={<Explore />} /> */}
      </Routes>
    </>
  )
}

export default App
