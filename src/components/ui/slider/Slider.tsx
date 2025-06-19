"use client"
import styles from "./slider.module.css"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {Autoplay} from "swiper/modules";
import {PartnerProps} from "@/features/partner/type";
import CardPartner from "@/features/partner/components/cardPartner/CardPartner";

export default function Slider({partners}: {partners: PartnerProps[]}) {


    return (
        <>
        <Swiper
        className={styles.swiper}
        spaceBetween={80}
        slidesPerView={2}
        freeMode={true}
        speed={3000}
        loop={true}
        modules={[Autoplay]}
        autoplay={{delay: 0, pauseOnMouseEnter: true}}
        breakpoints={{
            1480: {
                slidesPerView : 7,
                spaceBetween : 30
        }}}
        >
                {partners.map((partner)=>(

            <SwiperSlide key={partner.id}>
                        <CardPartner partner={partner}/>
            </SwiperSlide>

                ))}

        </Swiper>
        </>
    )
}