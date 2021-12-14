import './film-page-sidebar.css'
import { Link } from 'react-router-dom'


function FilmPageSideBar(props) {
    return (
        <div className="film-page__sidebar">
            <h3 className="film-page__sidebar-title">Другие фильмы:</h3>
            {props.films.map(function (film, index) {
                if (film.ID === props.params.id) {
                    return false
                } return (
                    <div key={index} className="film-page__sidebar-block">
                        <div ><img className="film-page__sidebar-poster" src={film.Poster} /></div>
                        <div className="film-page__sidebar-info">
                            <h5><Link to={'/film/' + film.ID} className="film-page__sidebar-subtitle">{film.Title}</Link></h5>
                            <p>Год выпуска: {film.Year}</p>
                            <p>Длительность: {film.Runtime}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default FilmPageSideBar