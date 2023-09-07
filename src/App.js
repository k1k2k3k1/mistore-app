import React from 'react'
import './App.css';
import Prenav from './component/Prenav';
import Nav from './component/Nav';
import Slider from './component/Slider';
import data from './component/data/data.json'
import Offers from './component/Offers';
import Heading from './component/Heading';
import StarPrudts from './component/StarPrudts';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HotAecsmenu from './component/HotAecsmenu';
import Hotaec from './component/Hotaec';
import Proriview from './component/Proriview';
import Vedio from './component/Vedio';
import Banner from './component/Banner';
import Footer from './component/Footer';

const App = () => {
  return (
    
    <div>
      <Router>
     <Prenav/>
     <Nav/>
     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCT"/>
     <StarPrudts starProduct={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAecsmenu/>
      <Routes>  <Route exat path='/music' element= {<Hotaec music={data.Hotaec.music}
       musicover={data.HotaecCover.music}/>}/>
        <Route exact path="/smartDevice" element={<Hotaec smartDevice={data.Hotaec.smartDevice} 
        smartDeviceCover={data.HotaecCover.smartDevice}  />}/>
       
      

       <Route exact path="/home"
         element={<Hotaec home={data.Hotaec.home}
          homeCover={data.HotaecCover.home}  />}/>
       
       <Route exact path="/lifestyle"
       element={<Hotaec lifeStyle={data.Hotaec.lifeStyle}
        lifeStyleCover={data.HotaecCover.lifeStyle}  />}/>
       


       <Route exact path="/mobileAccessories" element={
       <Hotaec mobileAccessories={data.Hotaec.mobileAccessories}
        mobileAccessoriesCover={data.HotaecCover.mobileAccessories}  />}/>
      

       
      </Routes> 
      <Heading text="PRODUCT REVIEWS"/>
      <Proriview productrivew={data.productReviews}/>
     </Router>
     <Heading text='VIDEOS'/>
     <Vedio vedio={data.videos}/>
     <Heading  text="IN THE PRESS"/>
     <Banner end={data.banner}/>
     <Footer footer={data.footer}/>
    </div>
  )
}

export default App
