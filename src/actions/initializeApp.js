import { API_ROOT } from '../apiRoot'

export const initializeApp = (setDecks) => {
    console.log(API_ROOT)
    return fetch(`${API_ROOT}decks`)
    .then(response => response.json())
    .then(decks => {
        console.log(decks)
        setDecks(decks)
    })
}