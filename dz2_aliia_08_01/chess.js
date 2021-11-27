function board(x, y) {
    let string = ''
    for (let i = 0; i <= x; i++) {
        string += '\n'
        for (let j = 0; j <= y; j++) {
            if (i % 2 === 0 && j === 0) {
                string += '  *'
            } else string += ' *'
        }
    }
    console.log(string);
}
board(8, 8)