import React from "react";
import Hero from "../../components/hero/Hero";
import Partner from "../../components/partner/Partner";
import NewProducts from "../../components/new-products/NewProducts";
import TopProducts from "../../components/top-products/TopProducts";
import Browse from "../../components/browse/Browse";
import SwiperComp from "../../components/swiper/Swiper";
import BrandsSlider from "../../components/brends-slider/BrandsSlider";
import ScrollManager from "../../components/scrollManager/ScrollManager";

const Home = () => {
    return (
        <ScrollManager>
            <Hero />
            <BrandsSlider />
            <NewProducts />
            <TopProducts />
            <Browse />
            <SwiperComp />
        </ScrollManager>
    );
};

export default Home;
