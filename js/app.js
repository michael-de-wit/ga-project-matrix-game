//Initialize attempt 2X2 matrix
let matrixR1C1Attempt = 0 //Attempt matrix a_11 position: 1st row, 1st column
let matrixR2C1Attempt = 0 //Attempt matrix a_12 position: 2nd row, 1st column
let matrixR1C2Attempt = 0 //Attempt matrix a_21 position: 1st row, 2nd column
let matrixR2C2Attempt = 0 //Attempt matrix a_22 position: 2nd row, 2nd column

// Determine target 2X2 matrix
let matrixR1C1Target = 0 //Target matrix a_11 position: 1st row, 1st column
let matrixR2C1Target = 0 //Target matrix a_12 position: 2nd row, 1st column
let matrixR1C2Target = 0 //Target matrix a_21 position: 1st row, 2nd column
let matrixR2C2Target = 0 //Target matrix a_22 position: 2nd row, 2nd column

//Initial starting vector coordinates in basis vector space
x2PosInitialStarting = 0 //x_2 coordinate in basis vector space
y2PosInitialStarting = 0 //y_2 coordinate in basis vector space

//
//Target starting vector coordinates in basis vector space
x2PosTargetStarting = 0 //x_2 coordinate in basis vector space
y2PosTargetStarting = 0 //y_2 coordinate in basis vector space

let matrixR1C1Pos = document.querySelector('input[name="a_11-input"');
let matrixR1C2Pos = document.querySelector('input[name="a_12-input"');
let matrixR2C1Pos = document.querySelector('input[name="a_21-input"');
let matrixR2C2Pos = document.querySelector('input[name="a_22-input"');

let targetScoreElement = document.querySelector('.target-score');
let currentScoreElement = document.querySelector('.current-score');

//Create a randomized starting position initial vector and ending position target vector; coordinates can be -5 to 5
let randomizeTarget = document.querySelector('.randomize-target');
randomizeTarget.addEventListener('click', function(event) {
    randomX2Int = randomIntFromInterval(-5,5)
    randomY2Int = randomIntFromInterval(-5,5)

    randommatrixR1C1Target = randomIntFromInterval(-5,5)
    randommatrixR2C1Target = randomIntFromInterval(-5,5)
    randommatrixR1C2Target = randomIntFromInterval(-5,5)
    randommatrixR2C2Target = randomIntFromInterval(-5,5)

    x2PosTargetStarting = randomX2Int;
    y2PosTargetStarting = randomY2Int;
    
    //Graph the ending position of the target vector
    targetVectorEndingCoords = graphVector(x2PosTargetStarting, y2PosTargetStarting, randommatrixR1C1Target, randommatrixR2C1Target, randommatrixR1C2Target, randommatrixR2C2Target, `target`,`ending`)
    targetVectorEndingCoordsX2 = targetVectorEndingCoords[0]; //Final target vector ending x_2 coordinate
    targetVectorEndingCoordsY2 = targetVectorEndingCoords[1]; //Final target vector ending x_2 coordinate
    console.log(targetVectorEndingCoordsX2,targetVectorEndingCoordsY2);

    //Graph the starting position of the initial / attempt vector -- i.e. the same as the starting position of the target vector
    graphVector(x2PosTargetStarting, y2PosTargetStarting, randommatrixR1C1Target, randommatrixR2C1Target, randommatrixR1C2Target, randommatrixR2C2Target, `initial`,`starting`)


    //Clear out the attempt matrix
    matrixR1C1Pos.value = 0;
    matrixR1C2Pos.value = 0;
    matrixR2C1Pos.value = 0;
    matrixR2C2Pos.value = 0;

    matrixR1C1Attempt = 0;
    matrixR2C1Attempt = 0;
    matrixR1C2Attempt = 0;
    matrixR2C2Attempt = 0;

    graphVector(x2PosTargetStarting, y2PosTargetStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)

    // console.log(`x2PosTargetStarting: ${x2PosTargetStarting}, y2PosTargetStarting: ${y2PosTargetStarting}`);
    // console.log(`randommatrixR1C1Target: ${randommatrixR1C1Target}, randommatrixR2C1Target: ${randommatrixR2C1Target}, randommatrixR1C2Target: ${randommatrixR1C2Target}, randommatrixR2C2Target: ${randommatrixR2C2Target}`);


})



// //Graph the ending position of the attempt vector
// graphVector(x2PosInitialStarting, y2PosInitialStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)



//Accept inputs into the attempt matrix and update the ending position of the attempt vector
//For R1C1: Accept inputs into the attempt matrix and update the ending position of the attempt vector

matrixR1C1Pos.addEventListener('input', function(event) {
    matrixR1C1Attempt = event.data
    attemptVectorEndingCoords = graphVector(x2PosTargetStarting, y2PosTargetStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)
    attemptVectorEndingCoordsX2 = attemptVectorEndingCoords[0]; //Final target vector ending x_2 coordinate
    attemptVectorEndingCoordsY2 = attemptVectorEndingCoords[1]; //Final target vector ending x_2 coordinate
    console.log(attemptVectorEndingCoordsX2,attemptVectorEndingCoordsY2);
    console.log(targetVectorEndingCoordsX2,targetVectorEndingCoordsY2);
    
    targetScore = calculateDotProduct(targetVectorEndingCoordsX2,targetVectorEndingCoordsY2,targetVectorEndingCoordsX2,targetVectorEndingCoordsY2)
    currentScore = calculateDotProduct(attemptVectorEndingCoordsX2,attemptVectorEndingCoordsY2,targetVectorEndingCoordsX2,targetVectorEndingCoordsY2)


})

//For R1C2: Accept inputs into the attempt matrix and update the ending position of the attempt vector

matrixR1C2Pos.addEventListener('input', function(event) {
    matrixR1C2Attempt = event.data
    attemptVectorEndingCoords = graphVector(x2PosTargetStarting, y2PosTargetStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)
    attemptVectorEndingCoordsX2 = attemptVectorEndingCoords[0]; //Final target vector ending x_2 coordinate
    attemptVectorEndingCoordsY2 = attemptVectorEndingCoords[1]; //Final target vector ending x_2 coordinate
    console.log(attemptVectorEndingCoordsX2,attemptVectorEndingCoordsY2);
    console.log(targetVectorEndingCoordsX2,targetVectorEndingCoordsY2);

    targetScore = calculateDotProduct(targetVectorEndingCoordsX2,targetVectorEndingCoordsY2,targetVectorEndingCoordsX2,targetVectorEndingCoordsY2)
    currentScore = calculateDotProduct(attemptVectorEndingCoordsX2,attemptVectorEndingCoordsY2,targetVectorEndingCoordsX2,targetVectorEndingCoordsY2)

})

//For R2C1: Accept inputs into the attempt matrix and update the ending position of the attempt vector

matrixR2C1Pos.addEventListener('input', function(event) {
    matrixR2C1Attempt = event.data
    attemptVectorEndingCoords = graphVector(x2PosTargetStarting, y2PosTargetStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)
    attemptVectorEndingCoordsX2 = attemptVectorEndingCoords[0]; //Final target vector ending x_2 coordinate
    attemptVectorEndingCoordsY2 = attemptVectorEndingCoords[1]; //Final target vector ending x_2 coordinate
    console.log(attemptVectorEndingCoordsX2,attemptVectorEndingCoordsY2);
    console.log(targetVectorEndingCoordsX2,targetVectorEndingCoordsY2);

})

//For R1C2: Accept inputs into the attempt matrix and update the ending position of the attempt vector

matrixR2C2Pos.addEventListener('input', function(event) {
    matrixR2C2Attempt = event.data
    attemptVectorEndingCoords = graphVector(x2PosTargetStarting, y2PosTargetStarting, matrixR1C1Attempt, matrixR2C1Attempt, matrixR1C2Attempt, matrixR2C2Attempt, `attempt`,`ending`)
    attemptVectorEndingCoordsX2 = attemptVectorEndingCoords[0]; //Final target vector ending x_2 coordinate
    attemptVectorEndingCoordsY2 = attemptVectorEndingCoords[1]; //Final target vector ending x_2 coordinate
    console.log(attemptVectorEndingCoordsX2,attemptVectorEndingCoordsY2);
    console.log(targetVectorEndingCoordsX2,targetVectorEndingCoordsY2);


})

// FUNCTIONS

// Random number generator between a given range; directly from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    console.log(`x2PosEndingVector: ${x2PosEndingVector}`, `y2PosEndingVector: ${y2PosEndingVector}`);
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

    return [x2PosBasisEnding,y2PosBasisEnding]
}

//Calculate the dot product between 2 x,y coord vectors
function calculateDotProduct(xA,yA,xB,yB) {
    dotProduct = xA * xB + yA * yB
    return dotProduct
}

