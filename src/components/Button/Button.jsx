import React from 'react'
import styles from './Button.module.css'
import { FaArrowRight } from "react-icons/fa";

function CustomButton({ text }) {
    return (
        <div className={styles.customBtn}>
            <span> {text} </span> <FaArrowRight className={styles.icon} />
        </div>
    )
}

export default CustomButton