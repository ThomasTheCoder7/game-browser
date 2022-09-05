
import '../App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect } from 'react';

const render = ({ setScModal, scModal, photos, setHideNav }) => {
  
  if (!scModal) return
  setHideNav(true);
  return (
    <>

    <div className='JCarouselModal'>
        <div className='exitBtn text-light fs-1' onClick={() => {
          setScModal(false); setHideNav(false);
        }}><i class="bi bi-x-lg"></i></div>

        <div className='JCarousel'>

        
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log()}
          onClick={(swiper)=>{console.log(swiper.activeIndex)}}
        
          
        >
          

          {photos.map((obj, i) => {
            return <SwiperSlide className='SwiperParent'>{<div id={i} index={i} key={i} className='lgScreenshot' style={{ "background-image": `url(${obj.image})` }}></div>}</SwiperSlide>
          })}
    
        </Swiper>
        
        </div>

        
        <div className='images'>

        
<Swiper
  spaceBetween={20}
  slidesPerView={photos.length}
  onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log()}
      onClick={(swiper)=>{console.log(swiper.activeIndex)}}
    
      
    >
      

      {photos.map((obj, i) => {
        return <SwiperSlide className='SwiperParent'>{<div id={i} index={i} key={i} className='smScreenshot' style={{ "background-image": `url(${obj.image})` }}></div>}</SwiperSlide>
      })}

    </Swiper>
    
    </div>

        

    

          </div>
          
    
    </>
     )
}


export default render;




{/* <SwiperSlide className='SwiperParent'>{<div className='lgScreenshot' style={{ "background-image": `url(${photos[0].image})` }}></div>}</SwiperSlide> */}