const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let exprArr = expr.split("");
    let result = [];
    let resultElement = [];
    for (let i = 0, first = 0, last = 2; i < exprArr.length/2 ; i++, first += 2, last += 2) {
        resultElement.push(exprArr.slice(first, last).join(''))
        if (resultElement.length == 5) {
            result.push(resultElement);
            resultElement = [];
        }
    }

    for (let items in result) {
        for (let item in result[items]) {
            if (result[items][item] == '00') {
                result[items][item] = '';
            } else if (result[items][item] == '10') {
                result[items][item] = '.';
            } else if (result[items][item] == '11') {
                result[items][item] = '-';
            } 
        }
        result[items] = MORSE_TABLE[result[items].join('')]
    }
    return result.join('')
}

module.exports = {
    decode
}