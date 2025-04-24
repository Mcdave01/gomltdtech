import  ServiceHeader from '../component/ServiceHeader'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import Service from '../component/Service'
const Services = () => {
  return (
    <div className="w-full overflow-x-hidden">
        <Nav />
      <ServiceHeader/>
      <Service />
      <Footer />
    </div>
  )
}

export default Services
