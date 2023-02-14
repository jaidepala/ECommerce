import React from "react";

// Next Elements
import Head from "next/head";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (<div className="layout">
		<Head>
			<title>Every Headphone Store</title>
		</Head>
		<header>
			<Navbar />
		</header>
		<main className="main-container">
			{ children }
		</main>
		<footer>
			<Footer />
		</footer>
	</div>);
};

export default Layout;
