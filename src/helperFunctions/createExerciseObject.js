export const createExerciseObject = exercise => {
    console.log(exercise)
    let newExercise = {
        activity: exercise.activity,
        level: exercise.level,
        termDisplay: exercise.displaySide,
        cardDisplay: exercise.displaySide === "english" ? "spanish" : "english",
        deckNames: getDeckNames(exercise.decks),
        cards: getCards(exercise.decks)
    }
    return newExercise
}

function getDeckNames (decks) {
    return decks.map(deck => deck.name)
}

function getCards (decks) {
    let cards = []
    decks.forEach(deck => deck.cards.forEach(card => cards.push(card)))
    return cards
}