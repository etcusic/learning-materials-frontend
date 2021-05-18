import { API_ROOT } from '../apiRoot'

export const fetchDecks = () => {
    return fetch(`${API_ROOT}api_decks`)
    .then(response => response.json())
    .then(decks => decks)
}