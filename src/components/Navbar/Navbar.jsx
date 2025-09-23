import React from "react";
import { Link, NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={[styles.navbar, styles.noCopy].join(" ")}>
            <NavLink
                to="/"
                className={({ isActive }) => {
                    return `${styles.shop} ${isActive ? styles.active : null}`;
                }}
                end
            >
                Shop
            </NavLink>
            <NavLink
                to="/cart"
                className={styles.cart}
                style={({ isActive }) => ({
                    color: isActive ? "blue" : null,
                })}
                end
            >
                <FaShoppingCart size={40} />
                <span className={styles.cartCount}>3</span>
            </NavLink>
        </nav>
    );
}
