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
}

const checkColumns = matrixColors => {
    let answer = false
    // let matrix = 
    console.log(`check columns => ${answer}`)
}