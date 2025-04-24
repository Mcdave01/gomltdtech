import  ServiceHeader from '../component/ServiceHeader'
import Nav from '../component/Nav'
import Service from '../component/Service'
const Services = () => {
  return (
    <div className="w-full overflow-x-hidden">
        <Nav />
      <ServiceHeader/>
      <Service />
    </div>
  )
}

export default Services
