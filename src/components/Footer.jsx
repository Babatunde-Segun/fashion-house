import React from "react";
import styles from "../styles/Footer.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.footerContent}>
        <p>&copy; 2024 FashionStore. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
