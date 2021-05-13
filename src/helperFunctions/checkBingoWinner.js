export const checkBingoWinner = (boardMatrix) => {
    let matrixColors = [...boardMatrix].map(row => row.map(cell => cell.props.color))
    let checkers = [
        checkRows(matrixColors),
        checkColumns(matrixColors),
        checkDiagonalOne(matrixColors),
        checkDiagonalTwo(matrixColors)
    ]
    console.log(`array => ${checkers}`)
    console.log(`T or F => ${checkers.find(check => check === true)}`)
}

const checkRows = matrixColors => {
    let answer = false
    if (matrixColors.find(row => row.every(cell => cell === "green"))){
        answer = true
    } 
    return answer
}

const checkColumns = matrixColors => {
    let matrix = [[], [], [], [], []]
    matrixColors.forEach( row => row.forEach((cell, i) => matrix[i].push(cell)))
    return checkRows(matrix)
}

const checkDiagonalOne = matrixColors => {
    let matrix = [matrixColors[0][0], matrixColors[1][1], matrixColors[2][2], matrixColors[3][3], matrixColors[4][4]]
    return matrix.every(cell => cell === "green")
}

const checkDiagonalTwo = matrixColors => {
    let matrix = [matrixColors[0][4], matrixColors[1][3], matrixColors[2][2], matrixColors[3][1], matrixColors[4][0]]
    return matrix.every(cell => cell === "green")
}