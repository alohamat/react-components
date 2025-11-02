import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ComponentPage from './pages/ComponentPage';

function App() {

  return (
    <Routes>
      <Route path='*' element={<Navigate to="/" replace />} />
      <Route path='/' element={<LandingPage />}/>
      <Route path='/components/:name' element={<ComponentPage />} />
    </Routes>
  )
}

export default App;