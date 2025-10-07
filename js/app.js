

//Initial vector coordinates in basis vector space
x1Pos = 0 //x_1 coordinate in basis vector space
y1Pos = 0 //y_1 coordinate in basis vector space
x2Pos = 3 //x_2 coordinate in basis vector space
y2Pos = 3 //y_2 coordinate in basis vector space

//Convert initial vector coordinates from basis to browser vector space
x1PosGraph = calculateBrowserXPosition(x1Pos) //convert x_1 coordinate to browser vector space
y1PosGraph = calculateBrowserYPosition(y1Pos) //convert y_1 coordinate to browser vector space
x2PosGraph = calculateBrowserXPosition(x2Pos) //convert x_2 coordinate to browser vector space
y2PosGraph = calculateBrowserYPosition(y2Pos) //convert y_2 coordinate to browser vector space

//Connect to the 'initial-vector' class for initial vector updates
const vectorLine = document.querySelector('.initial-vector')

//Plot the initial vector in browser vector space
vectorLine.setAttribute("stroke", "darkblue")
vectorLine.setAttribute("x1",x1PosGraph)
vectorLine.setAttribute("y1",y1PosGraph)
vectorLine.setAttribute("x2",x2PosGraph)
vectorLine.setAttribute("y2",y2PosGraph)


//Starting position of target vector coordinates in basis vector space
x1PosTarget = 0 //x_1 coordinate in basis vector space
y1PosTarget = 0 //y_1 coordinate in basis vector space
x2PosTarget = 3 //x_2 coordinate in basis vector space
y2PosTarget = 3 //y_2 coordinate in basis vector space

//Converts starting position of target vector coordinates from basis to browser vector space
x1PosTargetGraph = calculateBrowserXPosition(x1PosTarget) //convert x_1 coordinate to browser vector space
y1PosTargetGraph = calculateBrowserYPosition(y1PosTarget) //convert y_1 coordinate to browser vector space
x2PosTargetGraph = calculateBrowserXPosition(x2PosTarget) //convert x_2 coordinate to browser vector space
y2PosTargetGraph = calculateBrowserYPosition(y2PosTarget) //convert y_2 coordinate to browser vector space

console.log(x2PosTargetGraph);

//Connect to the 'target-vector' class for target vector updates
const vectorLineTarget = document.querySelector('.target-vector')

//Plot the starting position of the target vector in browser vector space
vectorLineTarget.setAttribute("stroke", "darkorange")
vectorLineTarget.setAttribute("x1",x1PosTargetGraph)
vectorLineTarget.setAttribute("y1",y1PosTargetGraph)
vectorLineTarget.setAttribute("x2",x2PosTargetGraph)
vectorLineTarget.setAttribute("y2",y2PosTargetGraph)


//Target matrix values in basis vector space
TargetMatrixa11 = 1 //Target matrix a_11 position: 1st row, 1st column
TargetMatrixa21 = 1 //Target matrix a_12 position: 2nd row, 1st column
TargetMatrixa12 = -1 //Target matrix a_21 position: 1st row, 2nd column
TargetMatrixa22 = 1 //Target matrix a_22 position: 2nd row, 2nd column

//Determine ending position of the target vector
let x2PosTargetVector = TargetMatrixa11 * x2PosTarget + TargetMatrixa12 * y2PosTarget
let y2PosTargetVector = TargetMatrixa21 * x2PosTarget + TargetMatrixa22 * y2PosTarget

x2PosTargetGraph = calculateBrowserXPosition(x2PosTargetVector) //convert x_2 coordinate to browser vector space
y2PosTargetGraph = calculateBrowserYPosition(y2PosTargetVector) //convert y_2 coordinate to browser vector space

vectorLineTarget.setAttribute("x2",x2PosTargetGraph)
vectorLineTarget.setAttribute("y2",y2PosTargetGraph)


let x2test = 0
let y2test = 0
x2test, y2test = calculateEndingVector(3,3,1,1,-1,1)
console.log(x2test, y2test);


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
    return x2PosEndingVector, y2PosEndingVector
}