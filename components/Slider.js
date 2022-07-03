import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
  return (
    <Swiper
    breakpoints={{
      // when window width is >= 640px
      640: {
        width: 640,
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 2,
      },
      1024: {
        width: 1024,
        slidesPerView: 3,
      },
      1440: {
        width: 1440,
        slidesPerView: 3,
      },
      2560: {
        width: 2560,
        slidesPerView: 3,
      },

      
    }}
      spaceBetween={0}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="bg-section1 "
      
    >
      
    
      <SwiperSlide>

        <Image
        src='/card/test-card.png'
        alt='test'
        width={500}
        height={500}
        />

      </SwiperSlide>
      <SwiperSlide>

        <Image
        src='/card/test-card.png'
        alt='test'
        width={500}
        height={500}
        />

      </SwiperSlide>
      <SwiperSlide>

<Image
src='/card/test-card.png'
alt='test'
width={500}
height={500}
/>

</SwiperSlide>
<SwiperSlide>

<Image
src='/card/test-card.png'
alt='test'
width={500}
height={500}
/>

</SwiperSlide>
<SwiperSlide>

<Image
src='/card/test-card.png'
alt='test'
width={500}
height={500}
/>

</SwiperSlide>
<SwiperSlide>

<Image
src='/card/test-card.png'
alt='test'
width={500}
height={500}
/>

</SwiperSlide>
    
      
    </Swiper>
    
  )
}
export default Slider