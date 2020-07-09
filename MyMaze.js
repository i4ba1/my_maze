const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateMaze(d) {
    let dimension = parseInt(d);
    let maze = new Array(dimension);

    for (let index = 0; index < dimension; index++) {
        maze[index] = new Array(dimension);
    }

    let isDoorFront = Boolean(true);
    for (let row = 0; row < dimension; row++) {
        let col = 0;
        if (row % 2 !== 1) {
            for (col = 0; col < dimension; col++) {
                if (isDoorFront) {
                    if (col === 1) {
                        maze[row][col] = " ";
                    } else {
                        maze[row][col] = "@";
                    }
                } else {
                    if (col === dimension - 2) {
                        maze[row][col] = " ";
                    } else {
                        maze[row][col] = "@";
                    }
                }

                if (col === dimension - 1) {
                    isDoorFront = !isDoorFront;
                }
            }
        } else {
            for (col = 0; col < dimension - 1; col++) {
                if (col === 0) {
                    maze[row][col] = "@";
                } else {
                    maze[row][col] = " ";
                }
            }

            if (col === dimension - 1) {
                maze[row][col] = "@";
            }
        }
    }

    return maze;
}

readLine.question('input your dimension: ', d => {
    let maze = generateMaze(d);
    maze.forEach(element => {
        console.log(element.join(""))
    });
    readLine.close();
});
