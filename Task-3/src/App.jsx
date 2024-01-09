import { Routes, Route } from 'react-router-dom'

// Pages
import LoginPage from "./_auth/LoginPage";
import Dashboard from "./_root/pages/Dashboard"

function App() {
  return (
    <>
      <Routes>
        {/* public routes visible for everyone */}
          <Route path='/' element={<LoginPage />} />

        {/* private routes visible on after signing in*/}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
