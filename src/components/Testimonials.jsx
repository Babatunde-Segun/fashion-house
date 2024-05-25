import React from "react";
import styles from "../styles/Testimonials.module.css";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Jane Doe", text: "Great quality and amazing service!" },
    {
      id: 2,
      name: "John Smith",
      text: "I love the custom designs. Highly recommend!",
    },
    {
      id: 3,
      name: "Emma Brown",
      text: "Fast delivery and perfect fit. Will shop again!",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className={styles.testimonialCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: testimonial.id * 0.2 }}
          >
            <p>{testimonial.text}</p>
            <h3>{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
