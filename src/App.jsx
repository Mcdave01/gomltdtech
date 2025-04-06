// import Nav from './component/Nav'
// import Hero from './component/Hero'
// import Service from './component/Service'
// import Portfolio from './component/Portfolio'
// import Testimonies from './component/Testimonies'
// import Team from './component/Team'
// import Blog from './component/Blog'
// import Partners from './component/Partners'
// import Footer from './component/Footer'

import {BrowserRouter as Router,Routes,Route,Link,} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
//import Service from './component/Service'
import Services from './Pages/Services'



function App() {
    return(
    <>

       <Router>
      <Link to='/' />
      <Link to='/About' />
      <Link to= '/Services' />
      <Link to= '/Contact' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Services' element={<Services/>} />
    </Routes>
     </Router>
     
    </>
  )
}

export default App
