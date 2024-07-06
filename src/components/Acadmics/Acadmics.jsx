import React from 'react'
import styles from './Acadmics.module.css'
import HeadWithImg from '../HeadWithImg/HeadWithImg'
import { FaArrowRight } from "react-icons/fa";

const Acadmics = () => {
    return (
        <div className={styles.Acadmics}>
            <HeadWithImg title="Acadmics" />
            <div className={styles.acadmicCards}>
                <div className={styles.cardWrapper}>
                    <img src="./src/assets/acadmic1.png" alt="" />
                    <div className={styles.overlay}>
                        <a href="#">
                            <span className={styles.title}>Let’s Talk Science</span>
                            <span className={styles.subtitle}>Learn More <FaArrowRight />
                            </span>
                        </a>

                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <img src="./src/assets/acadmic2.png" alt="" />
                    <div className={styles.overlay}>
                        <a href="#">
                            <span className={styles.title}>Let’s Talk Science</span>
                            <span className={styles.subtitle}>Learn More <FaArrowRight />
                            </span>
                        </a>

                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <img src="./src/assets/acadmic3.png" alt="" />
                    <div className={styles.overlay}>
                        <a href="#">
                            <span className={styles.title}>Let’s Talk Science</span>
                            <span className={styles.subtitle}>Learn More <FaArrowRight />
                            </span>
                        </a>

                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <img src="./src/assets/acadmic4.png" alt="" />
                    <div className={styles.overlay}>
                        <a href="#">
                            <span className={styles.title}>Let’s Talk Science</span>
                            <span className={styles.subtitle}>Learn More <FaArrowRight />
                            </span>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Acadmics