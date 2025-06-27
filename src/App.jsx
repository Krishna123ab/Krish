import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Features } from './pages/Features'
import {Demo} from './pages/Demo'
import { About } from './pages/About'
import ContactUs from './pages/Contact'
import { Footer } from './pages/Footer'
import { Route, Routes } from 'react-router-dom'
import {Policy} from './pages/Policy'
import { TermsAndConditions } from './pages/TermsCond'
import { HelpSupport } from './pages/HelpSupport'
import { RefundPolicy } from './pages/RefundCanc'
import ScrollToTop from './pages/ScrollToTop'
import Download from './pages/Download';


export const App = () => {
  return (
    <div className=''>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path="/policy" element={<Policy />} />
      <Route path="/terms-condition" element={<TermsAndConditions/>} />
      <Route path='/help&support' element={<HelpSupport/>}/>
      <Route path='/refund-cancellation' element={<RefundPolicy/>}/>
      <Route path="/download" element={<Download/>} />
    </Routes>
    <Footer/>
    </div>
  )
}
