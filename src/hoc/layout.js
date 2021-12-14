import React from 'react'
import './layout.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
const Layout = (props) => {
	return (
		<div className="layout">
			<Header />
			<main className="main">
				{props.children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout
