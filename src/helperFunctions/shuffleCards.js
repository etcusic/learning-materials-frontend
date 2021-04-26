export const shuffleCards = (arrayOfCards) => {
    return arrayOfCards.sort(() => Math.random() - 0.5)
}