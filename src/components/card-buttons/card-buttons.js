import './card-buttons.css'
import { useContext, useState } from 'react'
import { FilmsContext } from '../../context/films-context'


function CardButtons(props) {

    const [films, actions] = useContext(FilmsContext)
    const [active, setActive] = useState(false)
    const addFavToggler = () => {
        actions.addFav(props.film)
        if (active === true) {
            return setActive(false)
        } return setActive(true)
    }


    return (

        <div className="films-card__rating">
            <button onClick={addFavToggler} className={films.favFilms.includes(props.film) ? 'films-card__fav--active' : 'films-card__fav'}><i className="fas fa-heart"></i></button>
            <div className="films-card__rate">{props.findedFilm ? props.findedFilm.imdbRating : props.film.imdbRating}</div>

        </div>
    )
}

export default CardButtons