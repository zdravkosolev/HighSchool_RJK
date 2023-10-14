import React, { useState } from "react";
import styles from "./BottomHomePage.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import LeftArrowIcon from "../Icons/LeftArrowIcon";
import RightArrowIcon from "../Icons/RightArrowIcon";
import LogoSection from "./Logosection/LogoSection";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import MapSection from "./MapSection/MapSection";

const BottomHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCustomArrowClick = (direction: any) => () => {
    if (direction === "left") {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
      );
    } else if (direction === "right") {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }
  };

  const totalSlides = 4; // Update this with the total number of slides

  return (
    <>
      <section
        className={styles.carouselSection}
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="769" viewBox="0 0 1920 769" fill="none"%3E%3Cpath d="M0 21.1164C304.359 124.328 1373.2 -59.5579 1920 21.1164V769H0V21.1164Z" fill="%23E2F5FB"/%3E%3C/svg%3E\')',
        }}
      >
        {/* Carousel */}
        <div className={styles.arrowContainer}>
          <div
            className={`${styles.arrowButton} ${styles.leftArrow}`}
            onClick={handleCustomArrowClick("left")}
            style={{ width: "10%" }}
          >
            <LeftArrowIcon />
          </div>
          <div
            style={{ width: "80%", position: "relative" }}
            className={styles.imageContainer}
          >
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              selectedItem={currentSlide}
              onChange={(index) => setCurrentSlide(index)}
            >
              {/* container */}
              <CarouselSlide />
              <CarouselSlide />
              <CarouselSlide />
              <CarouselSlide />
            </Carousel>
            <div className={styles.circle}></div>
          </div>
          <div
            style={{ width: "5%" }}
            className={`${styles.arrowButton} ${styles.rightArrow}`}
            onClick={handleCustomArrowClick("right")}
          >
            <RightArrowIcon />
          </div>
        </div>
      </section>
      <LogoSection />
      <MapSection />
    </>
  );
};

export default BottomHomePage;
