//Initialize attempt 2X2 matrix
let matrixR1C1Attempt = 0 //Attempt matrix a_11 position: 1st row, 1st column
let matrixR2C1Attempt = 0 //Attempt matrix a_12 position: 2nd row, 1st column
let matrixR1C2Attempt = 0 //Attempt matrix a_21 position: 1st row, 2nd column
let matrixR2C2Attempt = 0 //Attempt matrix a_22 position: 2nd row, 2nd column

// Determine target 2X2 matrix
let matrixR1C1Target = 1 //Target matrix a_11 position: 1st row, 1st column
let matrixR2C1Target = 1 //Target matrix a_12 position: 2nd row, 1st column
let matrixR1C2Target = -1 //Target matrix a_21 position: 1st row, 2nd column
let matrixR2C2Target = 0 //Target matrix a_22 position: 2nd row, 2nd column

//Initial starting vector coordinates in basis vector space
x2PosInitialStarting = 3 //x_2 coordinate in basis vector space
y2PosInitialStarting = 3 //y_2 coordinate in basis vector space

//Graph the starting position of the initial / attempt vector
graphVector(x2PosInitialStarting, y2PosInitialStarting, matrixR1C1Target, matrixR2C1Target, matrixR1C2Target, matrixR2C2Target, `initial`,`starting`)

//
//Target starting vector coordinates in basis vector space
x2PosTargetStarting = 3 //x_2 coordinate in basis vector space
y2PosTargetStarting = 3 //y_2 coordinate in basis vector space

//Graph the ending position of the target vector
graphVector(x2PosTargetStarting, y2PosTargetStarting, matrixR1C1Target, matrixR2C1Target, matrixR1C2Target, matrixR2C2Target, `target`,`ending`)

//Graph the ending position of the attempt vector
graphVector(x2PosInitialStarting, y2PosInitialStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)



let matrixR1C1Pos = document.querySelector('input[name="a_11-input"');
matrixR1C1Pos.addEventListener('input', function(event) {
    matrixR1C1Attempt = event.data
    graphVector(x2PosInitialStarting, y2PosInitialStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)

})


let matrixR1C2Pos = document.querySelector('input[name="a_12-input"');
matrixR1C2Pos.addEventListener('input', function(event) {
    matrixR1C2Attempt = event.data
    graphVector(x2PosInitialStarting, y2PosInitialStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)

})

let matrixR2C1Pos = document.querySelector('input[name="a_21-input"');
matrixR2C1Pos.addEventListener('input', function(event) {
    matrixR2C1Attempt = event.data
    graphVector(x2PosInitialStarting, y2PosInitialStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)

})

let matrixR2C2Pos = document.querySelector('input[name="a_22-input"');
matrixR2C2Pos.addEventListener('input', function(event) {
    matrixR2C2Attempt = event.data
    graphVector(x2PosInitialStarting, y2PosInitialStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)

})



// FUNCTIONS

// Takes the X coordinate in basis vector space & converts it to browser vector space; i.e. what it needs to be to look reasonable in the browser
function calculateBrowserXPosition(xPos) {
    xPosGraph = 200 * (xPos + 10) / 10
    return xPosGraph
}

// Takes the Y coordinate in basis vector space & converts it to browser vector space; i.e. what it needs to be to look reasonable in the browser
function calculateBrowserYPosition(yPos) {
    yPosGraph = 200 - (200 * (yPos + 10) / 10 - 200)
    return yPosGraph
}

// Calculate ending vector after transformation of starting vector using a 2X2 matrix
function calculateEndingVector(x2PosStartingVector, y2PosStartingVector, matrixR1C1, matrixR2C1, matrixR1C2, matrixR2C2) {
    let x2PosEndingVector = matrixR1C1 * x2PosStartingVector + matrixR1C2 * y2PosStartingVector
    let y2PosEndingVector = matrixR2C1 * x2PosStartingVector + matrixR2C2 * y2PosStartingVector
    console.log(`x2PosStartingVector: ${x2PosStartingVector}`, `x2PosEndingVector: ${x2PosEndingVector}`);
    return [x2PosEndingVector, y2PosEndingVector]
}


//Graph the starting or the ending vector
function graphVector(x2PosStartingVector, y2PosStartingVector, matrixR1C1, matrixR2C1, matrixR1C2, matrixR2C2, vectorLine, positionToGraph) {
    let x1Pos = 0 // assume all vectors start at (0,0)
    let y1Pos = 0 // assume all vectors start at (0,0)

    //Converts starting position of target vector coordinates from basis to browser vector space
    x1PosGraph = calculateBrowserXPosition(x1Pos) //convert x_1 coordinate to browser vector space
    y1PosGraph = calculateBrowserYPosition(y1Pos) //convert y_1 coordinate to browser vector space
    x2PosGraphStarting = calculateBrowserXPosition(x2PosStartingVector) //convert starting x_2 coordinate to browser vector space
    y2PosGraphStarting = calculateBrowserYPosition(y2PosStartingVector) //convert starting y_2 coordinate to browser vector space

    //Calculate the ending vector coordinates in the basis vector space
    let x2PosBasisEnding = 0
    let y2PosBasisEnding = 0
    x2y2PosBasisEnding = calculateEndingVector(x2PosStartingVector, y2PosStartingVector, matrixR1C1, matrixR2C1, matrixR1C2, matrixR2C2)
    x2PosBasisEnding = x2y2PosBasisEnding[0]
    y2PosBasisEnding = x2y2PosBasisEnding[1]

    x2PosGraphEnding = calculateBrowserXPosition(x2PosBasisEnding) //convert starting x_2 coordinate to browser vector space
    y2PosGraphEnding = calculateBrowserYPosition(y2PosBasisEnding) //convert starting y_2 coordinate to browser vector space


    //Determine the appropriate line class for the vector to graph; can be `initial`, `target`, or `attempt`
    if (vectorLine === `initial`) {
        vectorClass = `.initial-vector`
    } else if (vectorLine === `target`) {
        vectorClass = `.target-vector`
    } else if (vectorLine === `attempt`) {
        vectorClass = `.attempt-vector`
    }

    vectorToUpdate = document.querySelector(vectorClass)

    vectorToUpdate.setAttribute("x1", x1PosGraph)
    vectorToUpdate.setAttribute("y1", y1PosGraph)

    if (positionToGraph === `starting`) {
        vectorToUpdate.setAttribute("x2", x2PosGraphStarting)
        vectorToUpdate.setAttribute("y2", y2PosGraphStarting)
    } else if (positionToGraph === `ending`) {
        vectorToUpdate.setAttribute("x2", x2PosGraphEnding)
        vectorToUpdate.setAttribute("y2", y2PosGraphEnding)
    }

    console.log(vectorToUpdate);
}

