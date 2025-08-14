import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import Notfound from './Pages/Notfound'
import SignUp from './Pages/SignUp'



function App() {

  return (
    <>
      <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/signup' element={<SignUp/>}/>


            <Route path='*' element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App
