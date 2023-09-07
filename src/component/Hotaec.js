import React from 'react'
import HotItemCard from './HotItemCard'
import '../style/hotac.css'
const Hotaec = ({ music, musicover, smartDevice, smartDeviceCover, home, homeCover,
  lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover }) => {
  return (
    <div className='Hotaec'>
      <div>
        <img src={musicover || smartDeviceCover || homeCover || lifeStyleCover
          || mobileAccessoriesCover}></img>
      </div>
      <div>
        {music && music.map((item, index) => (
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

        ))}
        {smartDevice && smartDevice.map((item, index) => (
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

        ))}
        {home && home.map((item, index) => (
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

        ))}

        {lifeStyle && lifeStyle.map((item, index) => (
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

        ))}

        {mobileAccessories && mobileAccessories.map((item, index) => (
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

        ))}

        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

      </div>
    </div>
  )
}

export default Hotaec
