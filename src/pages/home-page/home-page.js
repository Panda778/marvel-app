import React from 'react'
import HomePageSlider from '../../components/home-page-slider/home-page-slider'
import FilmsBlock from '../../components/films-block/films-block'
import './home-page.css'

const HomePage = () => {
	return (
		<div className="home-page">

			<HomePageSlider />

			<div className="container">
				<FilmsBlock />
			</div>
		</div>
	)
}

export default HomePage
