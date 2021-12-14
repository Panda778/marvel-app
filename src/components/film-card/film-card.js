import './film-card.css'
import { Link } from 'react-router-dom'
import CardButtons from '../card-buttons/card-buttons'

function FilmCard(props) {
    return (
        <div key={props.index} className="films-card">
            <CardButtons film={props.film} />


            <div className="films-card__image-box"><img className="films-card__img" src={props.film.Poster} /></div>
            <div className="films-card__info">
                <h5 ><Link className="films-card__title" to={'/film/' + props.film.ID}>{props.film.Title}</Link></h5>
                <ul className="films-card__list">
                    <li className="films-card__item">
                        {`Год выпуска: ${props.film.Year}`}
                    </li>
                    <li className="films-card__item">
                        {`Длительность: ${props.film.Runtime}`}
                    </li>
                    <li className="films-card__item">
                        {`Страна: ${props.film.Country}`}
                    </li>
                    <li className="films-card__item">
                        {`Режиссер: ${props.film.Director}`}
                    </li>
                </ul>
            </div>
        </div >
    )
}




export default FilmCard