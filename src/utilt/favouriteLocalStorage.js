export function getFilms() {
    return JSON.parse(localStorage.getItem('favourite'))
}

export function saveFilms(value) {
    return localStorage.setItem('favourite', JSON.stringify(value))
}

export function removeFilms() {
    return localStorage.removeItem('favourite')
}