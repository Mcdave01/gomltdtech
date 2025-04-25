import Nav from '../component/Nav'
import ContactContents from '../component/ContactContents';
import Footer from '../component/Footer'

const Contact = () => {
  return(
  <>
  <div className="flex flex-col gap-10 overflow-x-hidden">
    <div  className=" mx-auto  sm:px-6 lg:px-8 w-full">
  <Nav />
  <ContactContents/>
  <Footer/>
  </div>
  </div>
  </>
  )
}
export default Contact;