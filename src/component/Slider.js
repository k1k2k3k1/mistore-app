import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Slider = ({start}) => {
  return (
    <div>
     <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif'
        alt='...'
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg'
        alt='...'
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src='https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://i02.appmifile.com/860_operator_in/09/06/2021/15c70c1f59ef4aad235531578c3d1757.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src='https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={7}
        src='https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Slider
