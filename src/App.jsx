import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sign_in from './pages/Sign_in'
import Sign_up from './pages/Sign_up'

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Sign_in/>}/>
          <Route path='/sign_in' element={<Sign_in/>}/>
          <Route path='/sign_up' element={<Sign_up/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
