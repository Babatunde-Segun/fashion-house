import React from "react";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Discover Your Style</h1>
        <p>Explore the latest trends in fashion and find your unique look.</p>
        <motion.button className={styles.shopNow} whileHover={{ scale: 1.1 }}>
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
