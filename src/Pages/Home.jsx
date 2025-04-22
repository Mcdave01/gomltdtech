import Nav from '../component/Nav'
 import Hero from '../component/Hero'
import Service from '../component/Service'
import Portfolio from '../component/Portfolio'

import Footer from '../component/Footer'
import WhatsApp from '../component/WhatsApp'
import Adverts from '../component/Adverts'
import Enquiry from '../component/Enquiry'
import ProgressBar from '../component/ProgressBar'
import CCTVGadgetAdvert from '../component/CCTVGadgetAdvert'

const Home = () => {
  return (
    <>
      <section className="flex flex-col gap-4 overflow-hidden bg-gray-dark-800">
        <h1> Welcome </h1>
        <Nav  />
         <Hero />
        <Service /> 
      <Enquiry /> 
      < Adverts /> 
        <Portfolio /> 
        <ProgressBar />
        {/* <Testimonies />  */}
        {/* <Team />  */}
         <CCTVGadgetAdvert /> 
         <WhatsApp />
        <Footer />
      </section>
    </>
  )
}

export default Home
