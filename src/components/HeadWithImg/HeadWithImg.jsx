import React from 'react'
import styles from './HeadWithImg.module.css'
function HeadWithImg({ title }) {
    return (
        <div className={styles.HeadWithImg}>
            <h1 className={styles.title}>{title}</h1>
            <img
                className={styles.curveLine}
                src="./src/assets/curveLine.png"
                alt=""
            />

        </div>
    )
}

export default HeadWithImg