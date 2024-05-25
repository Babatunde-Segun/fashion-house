import React from "react";
import styles from "../styles/ProductGrid.module.css";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Trendy Jacket",
      image: "https://source.unsplash.com/300x400/?jacket",
    },
    {
      id: 2,
      name: "Stylish Dress",
      image: "https://source.unsplash.com/300x400/?dress",
    },
    {
      id: 3,
      name: "Classic Shoes",
      image: "https://source.unsplash.com/300x400/?shoes",
    },
    {
      id: 4,
      name: "Casual Tee",
      image: "https://source.unsplash.com/300x400/?tshirt",
    },
  ];

  return (
    <section className={styles.productGrid}>
      <h2>Featured Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className={styles.productCard}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: product.id * 0.2 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h3>{product.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
