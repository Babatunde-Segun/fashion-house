import React from "react";
import styles from "../styles/WhySewWithUs.module.css";
import { motion } from "framer-motion";

const WhySewWithUs = () => {
  return (
    <section className={styles.whySewWithUs}>
      <h2>Why Sew With Us?</h2>
      <div className={styles.content}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Quality Fabrics</h3>
          <p>
            We use only the finest fabrics to ensure your garments look and feel
            luxurious.
          </p>
        </motion.div>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Experienced Tailors</h3>
          <p>
            Our team of skilled tailors are dedicated to creating perfect fits
            every time.
          </p>
        </motion.div>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Custom Designs</h3>
          <p>
            We offer bespoke designs tailored to your individual style and
            preferences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySewWithUs;
