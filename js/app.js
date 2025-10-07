const vectorLine = document.querySelector('.vector')
console.log(vectorLine);

x1Pos = 0 //x_1 coordinate in basis vector space
x1PosGraph = 200 * (x1Pos + 10) / 10 //convert x_1 coordinate to browser vector space

y1Pos = 0 //y_1 coordinate in basis vector space
y1PosGraph = 200 - (200 * (y1Pos + 10) / 10 - 200) //convert y_1 coordinate to browser vector space

x2Pos = 3 //x_2 coordinate in basis vector space
x2PosGraph = 200 * (x2Pos + 10) / 10 //convert x_2 coordinate to browser vector space

y2Pos = 6 //y_2 coordinate in basis vector space
y2PosGraph = 200 - (200 * (y2Pos + 10) / 10 - 200) //convert y_2 coordinate to browser vector space

TargetMatrixa11 = 1 //Target matrix a_11 position: 1st row, 1st column
TargetMatrixa12 = 1 //Target matrix a_21 position: 1st row, 2nd column

TargetMatrixa21 = -1 //Target matrix a_12 position: 2nd row, 1st column
TargetMatrixa22 = 1 //Target matrix a_22 position: 2nd row, 2nd column

x1PosTargetVector = TargetMatrixa11

vectorLine.setAttribute("stroke", "green")
vectorLine.setAttribute("x1",x1PosGraph)
vectorLine.setAttribute("y1",y1PosGraph)
vectorLine.setAttribute("x2",x2PosGraph)
vectorLine.setAttribute("y2",y2PosGraph)

console.log(vectorLine);