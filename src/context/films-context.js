import { createContext, useState } from 'react'
import dataFilms from '../data/data.json'
import { getFilms, removeFilms, saveFilms } from '../utilt/favouriteLocalStorage'

export const FilmsContext = createContext()



export const FilmsProvider = (props) => {
    const [films, setFilms] = useState({
        allFilms: dataFilms,
        favFilms: getFilms() || []
    })





    const actions = {
        addFav: (film) => {
            const findedFilm = films.favFilms.find(function (f) {
                if (f.ID === film.ID) {
                    return film
                }
                return false
            })


            let newFilms = []

            if (findedFilm) {
                newFilms = films.favFilms.filter(function (f) {
                    if (f === findedFilm) {
                        return false
                    } return f
                })
            } else {
                newFilms = [film, ...films.favFilms]
            }
            setFilms({ ...films, favFilms: newFilms })
            saveFilms(newFilms)
        }

    }

    return (
        <FilmsContext.Provider value={[films, actions]}>
            {props.children}
        </FilmsContext.Provider>
    )
}


