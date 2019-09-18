//jshint esversion: 6

import React, { Component } from 'react';
import "./Navbar.scss";
import logo from "../../logo.png"

export default function Navbar() {
    return <nav className="nav-bar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
        <li>
            <a href="/" className="nav-link">
                Home
            </a>
        </li>
        <li>
            <a href="/" className="nav-link">
                about
            </a>
        </li>
        <li>
            <a href="/" className="nav-link active">
                tours
            </a>
        </li>
        </ul>
    </nav>
}