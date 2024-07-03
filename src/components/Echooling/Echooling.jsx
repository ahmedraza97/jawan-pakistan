import React from "react";
import styles from "./Echooling.module.css";

function Echooling() {
  return (
    <div className={styles.Echooling}>
      <div className={styles.innerWrapper}>
        <h1>Echooling News and Blogs</h1>
        <img
          className={styles.curveLine}
          src="./src/assets/curveLine.png"
          alt=""
        />
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                className={styles.curveLine}
                src="./src/assets/Echooling4.jpg"
                alt=""
              />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.tag}>Education</div>
              <p className={styles.title}>
                Kids future Schools & Corona Prevent to Growth
              </p>
              <span className={styles.inline}>
                <img
                  className={styles.curveLine}
                  src="./src/assets/user.svg"
                  alt=""
                />
                <p>Charlie Doyle</p>
              </span>
            </div>
          </div>
          {/* 2 */}
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                className={styles.curveLine}
                src="./src/assets/Echooling4.jpg"
                alt=""
              />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.tag}>Education</div>
              <p className={styles.title}>
                Kids future Schools & Corona Prevent to Growth
              </p>
              <span className={styles.inline}>
                <img
                  className={styles.curveLine}
                  src="./src/assets/user.svg"
                  alt=""
                />
                <p>Charlie Doyle</p>
              </span>
            </div>
          </div>
          {/* 3 */}
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                className={styles.curveLine}
                src="./src/assets/Echooling4.jpg"
                alt=""
              />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.tag}>Education</div>
              <p className={styles.title}>
                Kids future Schools & Corona Prevent to Growth
              </p>
              <span className={styles.inline}>
                <img
                  className={styles.curveLine}
                  src="./src/assets/user.svg"
                  alt=""
                />
                <p>Charlie Doyle</p>
              </span>
            </div>
          </div>
          {/* 4 */}
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                className={styles.curveLine}
                src="./src/assets/Echooling4.jpg"
                alt=""
              />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.tag}>Education</div>
              <p className={styles.title}>
                Kids future Schools & Corona Prevent to Growth
              </p>
              <span className={styles.inline}>
                <img
                  className={styles.curveLine}
                  src="./src/assets/user.svg"
                  alt=""
                />
                <p>Charlie Doyle</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Echooling;
