import React from "react";
import styles from "./Review.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

function Review() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={styles.Review}>
      <div className={styles.reviewWrapper}>
        <h1 className={styles.title}>What our student saying</h1>
        <img
          className={styles.curveLine}
          src="./src/assets/curveLine.png"
          alt=""
        />
        <div className={styles.ReviewWrapperContainer}>
          <Slider {...settings}>
            <div className={styles.reviewCard}>
              <div className={styles.img}>
                <img
                  className={styles.curveLine}
                  src="./src/assets/testimonial.png"
                  alt=""
                />
              </div>
              <div className={styles.rightCol}>
                <p className={styles.title}>
                  Justin Case <span>Student</span>
                </p>
                <p className={styles.para}>
                  Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia
                  eget consectetur sed, convallis at tellus. Curabitur non nulla
                  sit amet nisl tempus convallis quis ac lectus. Quisque velit
                  nisi, pretium ut lacinia in.
                </p>
                <div className={styles.review}>
                  <span>
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStarHalf className={styles.icon} />
                  </span>
                  <p>
                    4.9 <span>(14 Reviews)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.img}>
                <img
                  className={styles.curveLine}
                  src="./src/assets/testimonial.png"
                  alt=""
                />
              </div>
              <div className={styles.rightCol}>
                <p className={styles.title}>
                  Justin Case <span>Student</span>
                </p>
                <p className={styles.para}>
                  Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia
                  eget consectetur sed, convallis at tellus. Curabitur non nulla
                  sit amet nisl tempus convallis quis ac lectus. Quisque velit
                  nisi, pretium ut lacinia in.
                </p>
                <div className={styles.review}>
                  <span>
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStarHalf className={styles.icon} />
                  </span>
                  <p>
                    4.9 <span>(14 Reviews)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.img}>
                <img
                  className={styles.curveLine}
                  src="./src/assets/testimonial.png"
                  alt=""
                />
              </div>
              <div className={styles.rightCol}>
                <p className={styles.title}>
                  Justin Case <span>Student</span>
                </p>
                <p className={styles.para}>
                  Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia
                  eget consectetur sed, convallis at tellus. Curabitur non nulla
                  sit amet nisl tempus convallis quis ac lectus. Quisque velit
                  nisi, pretium ut lacinia in.
                </p>
                <div className={styles.review}>
                  <span>
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStar className={styles.icon} />
                    <FaStarHalf className={styles.icon} />
                  </span>
                  <p>
                    4.9 <span>(14 Reviews)</span>
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Review;
