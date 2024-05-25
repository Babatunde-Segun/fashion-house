import React from "react";
import styles from "../styles/Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className={styles.newsletter}>
        <h3>Subscribe to Our Newsletter</h3>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Enter your email" required />
          <motion.button
            type="submit"
            className={styles.subscribeButton}
            whileHover={{ scale: 1.1 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
      <p>&copy; 2024 FashionStore. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
