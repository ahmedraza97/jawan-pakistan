import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.innerWrapper}>
        <div className={styles.footerCol}>
          <div className={styles.logo}>
            <img src="./src/assets/logo.png" alt="" />
            <p>
              There are course and event custom post types so you can easily
              create and manage course, events.
            </p>
            <span className={styles.listItem}>
              <img src="./src/assets/phone.svg" alt="" />
              <a href="tel:+(402)76244183"> +(402) 762 441 83 </a>
            </span>
            <span className={styles.listItem}>
              <img src="./src/assets/mail.svg" alt="" />
              <a href="mailto:info@yourdmain.com"> info@echooling.com </a>
            </span>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h2>About us</h2>
          <ul className={styles.ul}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/course">Courses</a>
            </li>
            <li>
              <a href="/event">Events</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/profile">Become a Teacher</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h2>Useful Links</h2>
          <ul className={styles.ul}>
            <li>
              <a href="/">Browse Library</a>
            </li>
            <li>
              <a href="/">Library</a>
            </li>
            <li>
              <a href="/">Partners</a>
            </li>
            <li>
              <a href="/blog">News &amp; Blog</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Tutorials</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h2>Newsletter</h2>
          <p className={styles.customText}>
            Get the latest Echooling news <br />
            delivered to you inbox
          </p>
          <div className={styles.searchWrapper}>
            <input type="text" name="" id="" placeholder="Enter Text" />
            <span className={styles.btnWrapper}>
              <img src="./src/assets/rightArrow.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
