export const validateExercise = exercise => {
    switch (exercise.activity){
        case 'Practice':
                return validatePractice(exercise)
                break;
            case 'Multiple Choice':
                return validateMultipleChoice(exercise)
                break;
            case 'Speed Game':
                return validateSpeedGame(exercise)
                break;
            case 'Bingo':
                return validateBingo(exercise)
                break;
            default:
                return true
    }
}

function validatePractice(exercise){
    // no special validators needed yet
    return true
}

function validateMultipleChoice(exercise){
    // no special validators needed yet
    return true
}

function validateSpeedGame(exercise){
    // no special validators needed yet
    return true
}

function validateBingo(exercise){
    if (exercise.cards.length < 24){
        alert(`You need at least 24 vocab cards to play Bingo. Please select another set(s).`)
        return false
    } else {
        return true
    }
}