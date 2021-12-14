import React from 'react'
import './favourite-page.css'
import FilmCard from '../../components/film-card/film-card'
import { useContext } from 'react'
import { FilmsContext } from '../../context/films-context'
const FavouritePage = () => {

	const [films, actions] = useContext(FilmsContext)

	return (
		<div className="container">
			<div className="fav-page">
				<h2 className="fav-page__title">Избранное</h2>
				{films.favFilms.length > 0 ? <div className="fav-page__wrapper">
					{films.favFilms.map(function (favFilm, index) {
						return (
							<FilmCard film={favFilm} key={favFilm.ID} />
						)
					})}
				</div> : <p className="fav-page__empty">Список пуст</p>}


			</div>
		</div>
	)
}

export default FavouritePage
