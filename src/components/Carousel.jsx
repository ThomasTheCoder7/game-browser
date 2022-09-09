import "../App.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Controller, Pagination, Navigation } from "swiper";


import { useEffect, useState } from "react";

const render = ({
  setScModal,
  scModal,
  photos,
  setHideNav,
  imgNo,
  setImgNo,
}) => {
  let prevActive = imgNo;
  function DeleteCss(i) {
    
  }
  function UpdateCss(active) {
    let doc;
    try {
      doc = document.getElementById(prevActive + "sm");
      doc.classList.remove("current");
    } catch(Error) {}
    doc = document.getElementById(active + "sm");
    doc.classList.add("current");
    
    prevActive = active;
    
  }

  if (!scModal) return;
  setHideNav(true);


  const [swiper, setSwiper] = useState(undefined);
 



  const ScreenShots = ({ name, i, obj, onClick }) => {
    
    return (
      <div
        id={i + name.substring(0, 2)}
        index={i}
        className={`${name}`}
        style={{ "background-image": `url(${obj.image})` }}
        onClick={onClick}
      ></div>
    );
  };

  return (
    <>
      <div className="JCarouselModal">
        <div
          className="exitBtn text-light fs-1"
          onClick={() => {
            document.body.style.overflow = "auto";
            setScModal(false);
            setHideNav(false);
          }}
        >
          <i class="bi bi-x-lg"></i>
        </div>

        <div className="JCarousel">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={(swiper) => { UpdateCss(swiper.activeIndex);  }}
            modules={[Controller]}
            onSwiper={setSwiper}
            onInit={(swiper) => { swiper.slideTo(imgNo); document.body.style.overflow = "hidden"; }}
            
          >
            {photos.map((obj, i) => {
              return (
                <SwiperSlide className="SwiperParent" key={i}>
                  <ScreenShots name="lgScreenshot" i={i} obj={obj} />
                </SwiperSlide>
              );
            })}
            
          </Swiper>
        </div>
        
        <div className="CarouselImages">
            
          {photos.map((obj, i) => {
            let name = "smScreenshot"
            if (i === imgNo) { name += " current";}

              return <ScreenShots name={name} i={i} obj={obj} onClick={() => {
                swiper.slideTo(i);
              }} />
            
          })}
        </div>
      </div>
    </>
  );
};

export default render;

{
  /* <SwiperSlide className='SwiperParent'>{<div className='lgScreenshot' style={{ "background-image": `url(${photos[0].image})` }}></div>}</SwiperSlide> */
}
