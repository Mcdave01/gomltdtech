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
    <div className="w-full overflow-x-hidden">
      <Nav />
      <main className="flex flex-col gap-4">
        <Hero />
        <Service/>
        <Enquiry />
        <Adverts />
        <Portfolio />
        <ProgressBar />
        {/* <Testimonies /> */}
        {/* <Team /> */}
        <CCTVGadgetAdvert />
      
      <WhatsApp />
      <Footer />
      </main>
    </div>
  )
}

export default Home