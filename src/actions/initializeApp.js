import { API_ROOT } from '../apiRoot'

export const initializeApp = () => {
    fetch(`${API_ROOT}decks`)
    .then(response => response.json())
    .then(decks => console.log(decks))

}