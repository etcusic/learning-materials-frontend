export const checkBingoWinner = (boardMatrix) => {
    let matrixColors = [...boardMatrix].map(row => row.map(cell => cell.props.color))
    console.log(matrixColors)
    checkRows(matrixColors)
    checkColumns(matrixColors)
}

const checkRows = matrixColors => {
    let answer = false
    if (matrixColors.find(row => row.every(cell => cell === "green"))){
        answer = true
    } 
    console.log(`check rows => ${answer}`)
    return answer
}

const checkColumns = matrixColors => {
    let matrix = [[], [], [], [], []]
    matrixColors.forEach( row => row.forEach((cell, i) => matrix[i].push(cell)))
    let answer = checkRows(matrix)
    console.log(`check columns => ${answer}`)
}