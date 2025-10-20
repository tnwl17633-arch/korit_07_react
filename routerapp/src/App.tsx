import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import ContactSeoul from './ContactSeoul'
import ContactBusan from './ContactBusan'

function App() {


  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{' | '}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />}>
        <Route path="seoul" element={<ContactSeoul />} />
        <Route path="Busan" element={<ContactBusan />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
