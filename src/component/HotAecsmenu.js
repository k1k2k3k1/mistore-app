import React from 'react'
import { Link } from 'react-router-dom'
import '../style/hotmenu.css'
const HotAecsmenu = () => {
  return (
    <div className="HotaecMenu">
    <Link className="HotaecLink" to="/music">Music Store</Link>
    <Link className="HotaecLink" to="/smartDevice">Smart Devices</Link>
    <Link className="HotaecLink" to="/home">Home</Link>
    <Link className="HotaecLink" to="/lifestyle">Lifestyle</Link>
    <Link className="HotaecLink" to="/mobileAccessories">Mobile Accessories</Link>
   
</div>
  )
}

export default HotAecsmenu

