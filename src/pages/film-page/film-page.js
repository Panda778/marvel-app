import React from 'react'
import './film-page.css'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FilmsContext } from '../../context/films-context'
import CardButtons from '../../components/card-buttons/card-buttons'
import FilmPageSideBar from '../../components/film-page-sidebar/film-page-sidebar'


const FilmPage = () => {

	const [films, actions] = useContext(FilmsContext)
	const params = useParams()
	console.log(params)

	const findedFilm = films.allFilms.find(function (film, index) {
		if (film.ID == params.id) {
			return film
		}
		return false
	})


	return (
		<div className="container">
			<div className="film-page__wrapper">
				<div className="film-page__card">
					<div className="film-page__body">
						<CardButtons film={findedFilm} />
						<div><img className="film-page__poster" src={findedFilm.Poster} /></div>
						<div className="film-page__thumbnail">
							<h2 className="film-page__title">{findedFilm.Title} ({findedFilm.Year})</h2>
							<ul className="film-page__list">
								<li className="film-page__item">
									Год выпуска: {findedFilm.Year}
								</li>
								<li className="film-page__item">
									Длительность: {findedFilm.Runtime}
								</li>
								<li className="film-page__item">
									Страна: {findedFilm.Country}
								</li>
								<li className="film-page__item">
									Режиссер: {findedFilm.Director}
								</li>
							</ul>
						</div>
					</div>
					<div className="film-page__footer">
						<div className="film-page__plot">
							<h3 className="film-page__title">Краткое описание</h3>
							<p >{findedFilm.Plot}</p>
						</div>
						<div className="film-page__add-info">
							<h3 className="film-page__title">Дополнительная информация:

							</h3>
							<ul className="film-page__list">
								<li className="film-page__item">
									<b>Оценки: </b><span>{findedFilm.Ratings[0].Source + ":" + " " + findedFilm.Ratings[0].Value}; </span>
									<span>{findedFilm.Ratings[1].Source + ":" + " " + findedFilm.Ratings[1].Value}; </span>
									<span>{findedFilm.Ratings[2].Source + ":" + " " + findedFilm.Ratings[2].Value}; </span>
								</li>
								<li className="film-page__item">
									<b>Актеры: </b> {findedFilm.Actors}
								</li>
								<li className="film-page__item">
									<b>Награды: </b> {findedFilm.Awards}
								</li>
								<li className="film-page__item">
									<b>Кассовые сборы: </b> {findedFilm.BoxOffice}
								</li>
								<li className="film-page__item">
									<b>DVD: </b> {findedFilm.DVD}
								</li>
								<li className="film-page__item">
									<b>Продюссер: </b> {findedFilm.Director}
								</li>
								<li className="film-page__item">
									<b>Жанр: </b> {findedFilm.Genre}
								</li>
								<li className="film-page__item">
									<b>Языки: </b> {findedFilm.Language}
								</li>
								<li className="film-page__item">
									<b>Производство: </b> {findedFilm.Production}
								</li>
								<li className="film-page__item">
									<b>Рейтинг просмотра: </b> {findedFilm.Rated}
								</li>
								<li className="film-page__item">
									<b>Дата выхода: </b> {findedFilm.Released}
								</li>
								<li className="film-page__item">
									<b>Тип: </b> {findedFilm.Type}
								</li>
								<li className="film-page__item">
									<b>Сценаристы: </b> {findedFilm.Writer}
								</li>

							</ul>
						</div>

					</div>
				</div>
				<FilmPageSideBar films={films.allFilms} params={params} />
			</div>
		</div>
	)
}

export default FilmPage
