import './films-block.css'
import { useContext } from 'react'
import { FilmsContext } from '../../context/films-context'
import FilmCard from '../film-card/film-card'

function FilmsBlock() {
    const [films, actions] = useContext(FilmsContext)

    return (
        <section className="films">
            <h2 className="films__title">Список фильмов</h2>
            <div className="films__wrapper">
                {films.allFilms.map(function (film, index) {


                    return (
                        <FilmCard key={index} film={film} />
                    )
                })}
            </div>
        </section>
    )
}

export default FilmsBlock