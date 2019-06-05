let size = 5

// Generator
let ind = []
for (let i = 0; i < size; i++) ind.push(i)
let arr = new Array(size)
for (let i = 0; i < size; i++) {
    arr[i] = new Array(size)
    for (let j = 0; j < size; j++) {
        arr[i][j] = new Array(2)
        arr[i][j] = [(i + j) % size, (2*i + j) % size]
    }
}
function generate() {
    for (let i = 0; i < size; i++) {
        let a, b
        while (a === b) {
            a = random(ind)
            b = random(ind)
        }
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    for (let i = 0; i < size; i++) {
        let a, b
        while (a === b) {
            a = random(ind)
            b = random(ind)
        }
        for (let j = 0; j < 5; j++)
            [arr[j][a], arr[j][b]] = [arr[j][b], arr[j][a]];
    }
}

function setup() {
    createCanvas(size*50, size*50)
    generate()
}

function draw() {
    background(255)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            fill(0)
            textAlign(CENTER, CENTER)
            textSize(20)
            text(arr[i][j][0], i*50 + 25, j*50 + 25)
        }
    }
}