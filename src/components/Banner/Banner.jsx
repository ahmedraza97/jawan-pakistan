import React from "react";
import styles from "./Banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerSlider}>
        <Slider {...settings}>
          <div className={styles.bannerWrapper}>
            <img className={styles.web} src="./src/assets/bannerNoOneMob.jpg" alt="" />
            <img className={styles.dom} src="./src/assets/banerNoOne.jpg" alt="" />

            <div className={styles.contentWrapper}>
              <div className={styles.leftWrapper}>
                <p className={styles.tag}>Great Quality Cocial life</p>
                <h2>
                  Discover the world of
                  <br />
                  possible university.
                </h2>
                <p className={styles.btn}>Admissions</p>
              </div>
              <div className={styles.rightWrapper}>
                <div className={styles.cont}>
                  <span className={styles.playIcon}>
                    <FaPlay className={styles.icon} />
                  </span>
                  <p className={styles.play}>
                    Watch Video <br />
                    Intro
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* two */}
          <div className={styles.bannerWrapper}>
            <img src="./src/assets/desktopBannerTwo.jpg" alt="" />
            <div className={styles.contentWrapper}>
              <div className={styles.leftWrapper}>
                <p className={styles.tag}>Great Quality Cocial life</p>
                <h2>
                  Discover the world of
                  <br />
                  possible university.
                </h2>
                <p className={styles.btn}>Admissions</p>
              </div>
              <div className={styles.rightWrapper}>
                <div className={styles.cont}>
                  <span className={styles.playIcon}>
                    <FaPlay className={styles.icon} />
                  </span>
                  <p className={styles.play}>
                    Watch Video <br />
                    Intro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
