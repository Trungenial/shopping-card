import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={[styles.navbar, styles.noCopy].join(" ")}>
            <span>Shop</span>
            <span className={styles.cart}>
                <FaShoppingCart size={40} />
                <span className={styles.cartCount}>3</span>
            </span>
        </nav>
    );
}
